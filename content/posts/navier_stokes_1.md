---
title: "Ns Post 1"
date: 2022-09-08T15:51:44-06:00
draft: true
---

# Porting A Navier Stokes Solver to Chapel - Part 1

Introduction...

Link to related Python blog's [Notebook](https://nbviewer.org/github/barbagroup/CFDPython/blob/master/lessons/01_Step_1.ipynb)

and so on...

## Tutorial Step 1...

### Constants and Basic IO
---

Some info about `config const` and `writeln`...

Example code:
{{< chplChunk file="step_1" chunk="0" >}}


Produces output:
{{< goodChunk file="step_1" chunk="0" >}}


### Arrays
---

Some info about `Array`s...

Next section of example code:
{{< chplChunk chunk="1" file="step_1" >}}

Produces output (next section of the relevant .good file):
{{< goodChunk chunk="1" file="step_1" >}}

Further explanation...


### Stencil Computation
---

Some info about loops...

Final section of example code:
{{< chplChunk chunk="2" file="step_1" >}}

Produces output (last section of the relevant .good file):
{{< goodChunk chunk="2" file="step_1" >}}


## Moving onto step 2...

Full Example code:
{{< chplChunk file="step_2" >}}


Produces output:
{{< goodChunk file="step_2" >}}

# Conclusion
---

Blah blah blah
