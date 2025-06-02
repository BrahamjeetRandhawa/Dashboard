import React, { useEffect, useState } from "react";



function CircleAnimation({ percentage }) {
    const [angle, setAngle] = useState(0);
    const [displayNumber, setDisplayNumber] = useState(0);

    useEffect(() => {
        let currentAngle = 0;
        let currentNumber = 0;
        const targetAngle = percentage * 3.6;
        const Step = 3;

        let animationFrameId;
        
        const animate = () => {
            let updated = false;
            
            if (currentAngle < targetAngle) {
                currentAngle += Step;
                if (currentAngle > targetAngle) currentAngle = targetAngle;
                setAngle(currentAngle);
                updated = true;
            }
            if (currentNumber < percentage) {
                currentNumber += 1;
                if (currentNumber > percentage) currentNumber = percentage;
                setDisplayNumber(currentNumber);
                updated = true;
            }
            if (updated) {
                animationFrameId = requestAnimationFrame(animate);
            }
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
                <h4>{displayNumber}</h4>
            </div>
        );
}

export default CircleAnimation;