---
title: "Ns Post 1"
date: 2022-09-08T15:51:44-06:00
draft: true
---

# Porting A Navier Stokes Solver to Chapel - Part 1

Introduction...

Link to related Python blog's [Notebook](https://nbviewer.org/github/barbagroup/CFDPython/blob/master/lessons/01_Step_1.ipynb)

and so on...

### Constants and Basic IO
---

Some info about `config const` and `writeln`...

Example code:
{{< chplChunk chunk="0" subdir="/step_1" >}}


Produces output:
{{% goodChunk chunk="0" subdir="/step_1" %}}


### Arrays
---

Some info about `Array`s...

Next section of example code:
{{< chplChunk chunk="1" subdir="/step_1" >}}

Produces output (next section of the relevant .good file):
{{% goodChunk chunk="1" subdir="/step_1" %}}

Further explanation...


### Stencil Computation
---

Some info about loops...

Final section of example code:
{{< chplChunk chunk="2" subdir="/step_1" >}}

Produces output (last section of the relevant .good file):
{{% goodChunk chunk="2" subdir="/step_1" %}}


### Conclusion
---

Blah blah blah
