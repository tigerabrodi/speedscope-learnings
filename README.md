# Generate a profile in Node.js

You can use the flag `--prof` to generate a profile in Node.js. This profile can be used to analyze the performance of your application.

Link: https://nodejs.org/en/guides/simple-profiling

# .cpuprofile file

\*.cpuprofile file generated via node's built in `--cpu-prof` flag.

# Speedscope profiling

Once you have a profile, you can open SpeedScope in your browser and load the profile.

SpeedScope will display the flame graph, allowing you to zoom in on specific functions, see their stack depths, and understand where your application spends most of its time.

# History flame graphs

Flame graphs are a visualization tool for identifying frequent code-paths in profiled software. Developed to analyze stack traces, they are represented as stacked bars where the width indicates the frequency of code execution.

- **Types**: They come in various forms, including CPU, Memory, Off-CPU, Hot/Cold, and Differential flame graphs.
- **Layout**: The x-axis represents stack profile population (not time) and is alphabetically sorted. The y-axis shows stack depth. Each rectangle represents a stack frame; wider frames indicate higher frequency.
- **Interactivity**: Features include mouse hover for details, click to zoom, and search to highlight and measure stack inclusion.
- **Coloring**: Uses random colors for visual differentiation; variations include icicle charts (inverted y-axis) and flame charts (time on x-axis).
