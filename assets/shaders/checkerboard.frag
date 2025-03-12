#version 330 core

out vec4 frag_color;

// In this shader, we want to draw a checkboard where the size of each tile is (size x size).
// The color of the top-left most tile should be "colors[0]" and the 2 tiles adjacent to it
// should have the color "colors[1]".

//TODO: (Req 1) Finish this shader.

uniform int size = 32;
uniform vec3 colors[2];

void main(){
    // Get the fragment coordinates
    ivec2 fragCoord = ivec2(gl_FragCoord.xy);
    
    // Determine which cell in the checker pattern this pixel belongs to
    // by dividing the coordinates by the size of each tile
    int cellX = fragCoord.x / size;
    int cellY = fragCoord.y / size;
    
    // Check if the sum of cell coordinates is even or odd
    // This creates the checkerboard pattern
    // (cellX + cellY) % 2 will be 0 for even sum, 1 for odd sum
    int colorIndex = (cellX + cellY) % 2;
    
    // Output the appropriate color based on the checkerboard pattern
    frag_color = vec4(colors[colorIndex], 1.0);
}