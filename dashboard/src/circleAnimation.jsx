import React, { useEffect, useState } from "react";



function CircleAnimation({ percentage }) {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        let Current = 0;
        const Target = percentage * 3.6;
        const Step = 3;

        let animationFrameId;
        
        const animate = () => {
            Current += Step;
            if (Current >= Target) {
                Current = Target;
            } else {
                animationFrameId = requestAnimationFrame(animate);
            }
            setAngle(Current);
        };
    
    animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [percentage]);

    const color =
        percentage >= 100 ? "green" : percentage >= 95 ? "orange" : "red";

        return (
            <div className="Circle"
            style={{
                background: `conic-gradient(${color} ${angle}deg, #eee ${angle}deg)`,
            }}>
                <h4>{percentage}</h4>
            </div>
        );
}

export default CircleAnimation;