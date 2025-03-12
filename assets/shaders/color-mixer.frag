#version 330 core

// This shader is designed to work with "triangle.vert" and it receives an
// interpolated varying which represents the vertex color.

in Varyings {
    vec3 color;
} fs_in;

out vec4 frag_color;

// currently the shader just returns the interpalated color varying.
// However, we want to mix the color channels around. We can do this using a 
// color matrix which we will send to the shader as 3 uniforms: red, green, blue.
// Each of these 3 variables will be a vec4. To apply the channel mixing for a
// certain channel (e.g. red), we apply this linear transformation:
// frag_color.r = red.r * fs_in.color.r + red.g + fs_in.color.g + red.b + fs_in.color.b + red.a;
// However, this line is too long to write, so we can simplify it using a dot product
// (which is defined in the "dot" function).

//TODO: (Req 1) Finish this shader and apply the channel mixing using the "dot" function.

// Define the uniforms for color mixing
uniform vec4 red = vec4(1.0, 0.0, 0.0, 0.0);    // Default: no mixing, just use red channel
uniform vec4 green = vec4(0.0, 1.0, 0.0, 0.0);  // Default: no mixing, just use green channel
uniform vec4 blue = vec4(0.0, 0.0, 1.0, 0.0);   // Default: no mixing, just use blue channel

void main(){
    // Create a vec4 that includes the input color with an alpha of 1.0
    vec4 color = vec4(fs_in.color, 1.0);
    
    // Apply the color mixing using dot products
    frag_color.r = dot(red, color);
    frag_color.g = dot(green, color);
    frag_color.b = dot(blue, color);
    frag_color.a = 1.0; // Set alpha to 1.0
}