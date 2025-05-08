import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SystemDiagramCanvas = ({ nodes, links, width = 800, height = 600 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!nodes || !links || nodes.length === 0) return;

    // Clear any existing SVG
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", "100%")
      .attr("height", "100%")
      .style("font", "12px sans-serif")
      .style("background", "#18181D");

    // Define the arrowhead marker
    svg.append("defs").selectAll("marker")
      .data(["positive", "negative"])
      .enter().append("marker")
      .attr("id", d => `arrow-${d}`)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 20)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("fill", d => d === "positive" ? "#10b981" : "#ef4444")
      .attr("d", "M0,-5L10,0L0,5");

    // Create the simulation with these forces
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(80));

    // Draw links with gradients
    const link = svg.append("g")
      .selectAll("path")
      .data(links)
      .enter().append("path")
      .attr("stroke", d => d.type === "positive" ? "#10b981" : "#ef4444")
      .attr("stroke-opacity", 0.8)
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", d => d.type === "delayed" ? "5,5" : "none")
      .attr("marker-end", d => `url(#arrow-${d.type})`)
      .attr("fill", "none");

    // Draw node circles
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .enter().append("g")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Add circle backgrounds
    node.append("circle")
      .attr("r", d => d.type === "variable" ? 40 : 50)
      .attr("fill", d => {
        if (d.type === "driver") return "rgba(108, 99, 255, 0.8)";
        if (d.type === "outcome") return "rgba(0, 212, 255, 0.8)";
        return "rgba(255, 255, 255, 0.1)";
      })
      .attr("stroke", d => {
        if (d.type === "driver") return "#6c63ff";
        if (d.type === "outcome") return "#00d4ff";
        return "rgba(255, 255, 255, 0.2)";
      })
      .attr("stroke-width", 2);

    // Add circle glow effect
    node.append("circle")
      .attr("r", d => d.type === "variable" ? 40 : 50)
      .attr("fill", "none")
      .attr("stroke", d => {
        if (d.type === "driver") return "#6c63ff";
        if (d.type === "outcome") return "#00d4ff";
        return "rgba(255, 255, 255, 0.2)";
      })
      .attr("stroke-width", 1)
      .attr("filter", "url(#glow)");

    // Add text backgrounds
    node.append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("x", -40)
      .attr("y", -10)
      .attr("width", 80)
      .attr("height", 20)
      .attr("fill", "rgba(24, 24, 29, 0.85)")
      .attr("stroke", "rgba(255, 255, 255, 0.1)")
      .attr("stroke-width", 1);

    // Add node labels
    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", d => {
        if (d.type === "driver") return "#6c63ff";
        if (d.type === "outcome") return "#00d4ff";
        return "rgba(255, 255, 255, 0.9)";
      })
      .attr("font-weight", 500)
      .text(d => d.name || d.id);

    // Define glow effect
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
    
    filter.append("feGaussianBlur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");
    
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
      .attr("in", "coloredBlur");
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    // Update the positions
    simulation.on("tick", () => {
      link.attr("d", d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        
        // If the source and target are the same node, create a looping path
        if (d.source === d.target) {
          return `M${d.source.x},${d.source.y} A40,40 0 1,1 ${d.target.x + 1},${d.target.y}`;
        }
        
        return `M${d.source.x},${d.source.y} A${dr * 1.2},${dr * 1.2} 0 0,1 ${d.target.x},${d.target.y}`;
      });

      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [nodes, links, width, height]);

  return (
    <svg 
      ref={svgRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        maxHeight: '600px',
        background: 'linear-gradient(135deg, var(--card-bg), var(--darker-bg))'
      }}
    />
  );
};

export default SystemDiagramCanvas; 