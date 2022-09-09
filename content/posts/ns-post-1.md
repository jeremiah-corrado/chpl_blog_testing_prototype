---
title: "Ns Post 1"
date: 2022-09-08T15:51:44-06:00
draft: true
---

# Porting A Navier Stokes Solver to Chapel - Part 1

Introduction...

Link to related Python blog's [Notebook](https://nbviewer.org/github/barbagroup/CFDPython/blob/master/lessons/01_Step_1.ipynb)

and so on...

### Constants and Writing to the Console
---

Some info about `config const` and `writeln`...

Example code:

{{< highlight chapel >}}
    {{% include "/static/navier_stokes_1/step_1/chunk_0.chpl" %}}
{{< / highlight >}}

Produces output:

```
{{% include "/static/navier_stokes_1/step_1/chunk_0.good" %}}
```

### Arrays
---

Some info about `Array`s...

Next section of example code:

{{< highlight chapel >}}
    {{% include "/static/navier_stokes_1/step_1/chunk_1.chpl" %}}
{{< / highlight >}}

Produces output (next section of the relevant .good file):

```
{{% include "/static/navier_stokes_1/step_1/chunk_1.good" %}}
```

Further explanation...


### Stencil Computation
---

Some info about loops...

Final section of example code:

{{< highlight chapel >}}
    {{% include "/static/navier_stokes_1/step_1/chunk_2.chpl" %}}
{{< / highlight >}}

Produces output (last section of the relevant .good file):

```
{{% include "/static/navier_stokes_1/step_1/chunk_2.good" %}}
```


### Conclusion
---

Blah blah blah
