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

# SpeedScope views

SpeedScope offers three different views for analyzing performance profiles: Time Order, Left Heavy, and Sandwich.

## 1. Time Order View

- **What**: This view represents the profiled stack traces in the chronological order they were recorded. It shows the progression of stack traces over time.

- **When to Use**: Use this view when you need to understand the chronological sequence of events or when looking for patterns over time, such as recurring spikes in CPU usage.

- **How it Works**: It aligns stack frames horizontally according to their occurrence in time. The x-axis represents time, and the y-axis represents stack depth.

- **Use Cases**: Ideal for analyzing time-based patterns and understanding how the call stack evolves over a specific period. It's particularly useful in scenarios where the order of operations is crucial, like debugging race conditions or performance issues in animations or UI rendering.

## 2. Left Heavy View

- **What**: This view organizes stack frames based on their total time contribution, irrespective of when they occurred. Frames that consume more time appear wider and are sorted to the left, hence the name "Left Heavy."

- **Deep Dive**:
  - **When to Use**: It's most effective when you want to identify the functions where most time is spent, regardless of their chronological order. It helps in pinpointing performance bottlenecks.
  - **How it Works**: In this view, the x-axis still represents time, but frames are sorted by their total duration in the profile. This reordering groups similar stack traces together, making it easier to identify heavy functions.
  - **Use Cases**: Essential for performance optimization, as it highlights the hot paths or most expensive functions in your application. It's beneficial for identifying and optimizing the parts of code that have the most significant impact on performance.

## 3. Sandwich View

- **What**: Sandwich view combines aspects of both the Time Order and Left Heavy views. It layers the profiles to show which functions are on-CPU the most across the entire profile.

- **When to Use**: Useful for getting an overview of time consumption across different functions, both in order and by frequency. It's like a hybrid approach, providing insights into both chronological sequence and time consumption.

- **How it Works**: It stacks the profiles in a way that shows both the chronological order of function calls and their cumulative time. The x-axis represents time, and the y-axis shows the cumulative duration of function calls.

- **Use Cases**: Ideal for a more comprehensive analysis where you need insights into the timing and frequency of function calls. It can be particularly useful when you need to balance the insights gained from Time Order and Left Heavy views.

# Left heavy

In the Left Heavy view, the visualization is focused on showing you which functions (or code paths) in your profile are consuming the most time, and it organizes this information in a way that prioritizes these functions.

1. **Most Time-Consuming Functions to the Left**: The functions that consume the most time (including the time spent in functions they call) are placed towards the left side of the graph. This makes it easy to identify the most significant performance bottlenecks in your application.

2. **Stack Depth and Function Calls**: Each horizontal layer or "bar" in the graph represents a function in the call stack. The topmost bar represents a function that was directly consuming CPU (or whichever resource you're profiling). The bars beneath it represent the sequence of function calls that led to that top function being executed.

3. **Understanding the Call Hierarchy**:

   - The function at the top (the widest bar on the left) is where the most time is being spent.
   - Directly beneath this top bar are the functions it called, and below those are the functions they called, and so on. This structure gives you a hierarchical view of function calls.
   - If a function (bar) is directly beneath another, it means the upper function called the lower one.

4. **Navigation and Interaction**:

   - You can click on a function (bar) to zoom into it. This can help you focus on the specific call hierarchy stemming from that function.
   - When you zoom in, you can see more details about the lower-level functions that may not be visible at the initial zoom level due to their smaller contribution to the total execution time.

5. **Use Case**:
   - It's particularly useful for identifying "hot paths" in your code – the sequences of function calls that cumulatively take up the most time.
   - This view helps in understanding which high-level functions are the main culprits of performance issues and which specific lower-level calls contribute to these issues.

# .cpuprofile cookbook

The .cpuprofile files are generated for profiling Node.js applications.

Direct Script Execution: You can use --cpu-prof when directly executing a Node.js script. For example:

```
node --cpu-prof my-script.js
```

This command profiles my-script.js and generates a .cpuprofile file upon completion.

With npm Scripts: If you're running a script defined in package.json, prepend node --cpu-prof before the script command. For instance:

```
node --cpu-prof -- ./node_modules/.bin/eslint . --ignore-pattern "docs/**"
```

Output File: By default, Node.js creates a .cpuprofile file in the current working directory. The file name is usually of the format isolate-0xnnnnnnnnnnnn-v8.log.

Customizing Output:

You can specify a custom output file name using the --cpu-prof-name flag.
Example: `node --cpu-prof --cpu-prof-name=profile.cpuprofile my-script.js`.

## Profiling a Part of Your Application

To profile specific parts of your application, you can use the inspector module to start and stop profiling programmatically.
This allows more targeted profiling and can be used to avoid profiling startup or shutdown phases.
