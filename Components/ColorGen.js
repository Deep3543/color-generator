import React from "react";

const ColorGen = () => {
    return(
        // Image - Container
        <div className="img-container">
            {/* Title */}
            <h2 className="header">Discrete Colors Image [32,768 colors]</h2>
            {/* Add Color Generator Code */}

            {/* Add functionality to shuffle colors in the image */}
        </div>
    )
}

const ColorData = () => {
    // Save the Generated colors into colorsGenerated Array
    const colorsGenerated = genColors();

    // Function to Generate the Colors
    function genColors() {
        // Store the Discrete Values that are divisable by 8 to array ranging from 1 to 256 such as 8, 16, 24, ..., 256       
        var R = DiscreteRange(8, 256);
        var G = DiscreteRange(8, 256);
        var B = DiscreteRange(8,256);

        // Loops to generate the colors from the range acquired above
        var colors = [];
        for(i=0; i <= R.length; i++){
            // For Red Values
            const indexR = Math.floor(Math.random() * R.length);
            const valueR = R[indexR];
            R.splice(indexR, 0);
            
            // For Green Values
            for(j=0; j <= G.length; j++){
                const indexG = Math.floor(Math.random() * G.length);
                const valueG = G[indexG];
                G.splice(indexG, 0);

                // For Blue Values
                for(k=0; k <= B.length; k++){
                    const indexB = Math.floor(Math.random() * B.length);
                    const valueB = B[indexB];
                    B.splice(indexB, 0);

                    // Add the values to the color array for later use
                    const rgbColors = `rgb(${valueR}, ${valueG}, ${valueB})`;

                    // Push the values to the array
                    colors.push(rgbColors);
                }
            }
        }
    }
}