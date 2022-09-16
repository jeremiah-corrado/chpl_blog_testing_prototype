---
title: "Example: Displaying Multi-Config .good Files"
date: 2022-09-16T11:49:29-06:00
draft: true
---

The following program has a `config const` and `config param`:

{{< chplChunk file="multiConfig" chunk="0" >}}

The `param` selects between two implementations of the same function:

{{< chplChunk file="multiConfig" chunk="1" >}}

The configuration constant is passed as an argument to the function:

{{< chplChunk file="multiConfig" chunk="2" >}}

Here are the console outputs for various combinations of configurations:

{{< goodMenu name="list_1" >}}
    {{< goodOption chunk="1" file="multiConfig" cnfg="1-1" txt="zeroIndexed=false, n=5" >}}
    {{< goodOption chunk="1" file="multiConfig" cnfg="1-2" txt="zeroIndexed=false, n=15" >}}
    {{< goodOption chunk="1" file="multiConfig" cnfg="2-1" txt="zeroIndexed=true, n=5" >}}
    {{< goodOption chunk="1" file="multiConfig" cnfg="2-2" txt="zeroIndexed=true, n=15" >}}
{{< /goodMenu >}}
