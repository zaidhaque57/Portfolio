import { Activity, ArrowDownUp, Boxes, Clapperboard, GraduationCap, Search, Sparkles } from "lucide-react";
import type { Project } from "../types";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "stockwise") {
    return (
      <div className="project-visual visual-stockwise" aria-label="Illustration of an inventory dashboard" role="img">
        <div className="mock-window">
          <div className="mock-window-top"><span /><span /><span /><small>stockwise / overview</small></div>
          <div className="mock-dashboard">
            <div className="mock-sidebar"><i /><i /><i /><i /></div>
            <div className="mock-main">
              <div className="mock-greeting"><span>Inventory overview</span><b>↗</b></div>
              <div className="mock-stats"><i /><i /><i /></div>
              <div className="mock-chart"><div className="chart-lines" /><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
              <div className="mock-table"><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <div className="visual-float visual-float--stock"><Activity size={16} /><span><b>Demand trend</b><small>Forecast overview</small></span></div>
      </div>
    );
  }

  if (project.visual === "aniverse") {
    return (
      <div className="project-visual visual-aniverse" aria-label="Illustration of an anime discovery catalogue" role="img">
        <div className="anime-topline"><span><Clapperboard size={14} /> NETFLIX_CLONE</span><span><Search size={14} /> Explore</span></div>
        <div className="anime-title">Find your next <em>favorite.</em></div>
        <div className="anime-cards">
          <div className="anime-poster poster-one"><Sparkles size={17} /><span>01 / ADVENTURE</span></div>
          <div className="anime-poster poster-two"><span>02 / FANTASY</span></div>
          <div className="anime-poster poster-three"><span>03 / DRAMA</span></div>
        </div>
        <div className="anime-caption">A universe of stories, one search away.</div>
      </div>
    );
  }

  if (project.visual === "placement") {
    return (
      <div className="project-visual visual-student" aria-label="Illustration of a student placement prediction dashboard" role="img">
        <div className="student-panel">
          <div className="student-panel-head"><Activity size={19} /><span>Placement / Prediction</span><b>•••</b></div>
          <div className="student-panel-title">Student outcome <small>Machine learning insights</small></div>
          <div className="placement-score"><span>Prediction overview</span><strong>ML</strong></div>
          <div className="placement-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <div className="placement-legend"><span><i /> Academic data</span><span><i /> Model output</span></div>
        </div>
        <div className="visual-float visual-float--student"><Activity size={16} /><span><b>Random Forest</b><small>Prediction model</small></span></div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-student" aria-label="Illustration of a student records dashboard" role="img">
      <div className="student-panel">
        <div className="student-panel-head"><GraduationCap size={19} /><span>Campus / Students</span><b>•••</b></div>
        <div className="student-panel-title">Student directory <small>Manage records</small></div>
        <div className="student-search"><Search size={13} /> Search students...</div>
        <div className="student-row student-row-head"><span>STUDENT</span><span>STATUS</span><span>ID</span></div>
        {["Aarav Sharma", "Maya Singh", "Rehan Khan"].map((name, index) => (
          <div className="student-row" key={name}>
            <span className="student-name"><i className={`avatar avatar-${index}`} />{name}</span>
            <span className="student-status">Active</span>
            <span className="student-id">0{index + 1}8</span>
          </div>
        ))}
      </div>
      <div className="visual-float visual-float--student"><Boxes size={16} /><span><b>Clean records</b><small><ArrowDownUp size={11} /> CRUD workflow</small></span></div>
    </div>
  );
}
