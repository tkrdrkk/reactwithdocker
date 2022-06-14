---
name: "feature"
root: "."
output: "**/*"
ignore: []
questions:
  value: "Please enter any text."
---

# `src/features/{{ inputs.value }}/docs/{{ inputs.value }}.md`

```markdown
Let's make a document! See more detail scaffdog repository.
https://github.com/cats-oss/scaffdog/#templates
```

# `src/features/{{ inputs.value }}/hooks/use{{ inputs.value | pascal }}.tsx`

```typescript
import { useState, useEffect } from "react";

export type {{ inputs.value | pascal }} = {

}

export const use{{ inputs.value | pascal }} = () => {
  const [{{ inputs.value }}, set{{ inputs.value | pascal }}] = useState()
  useEffect(() => {
    set{{ inputs.value | pascal }}()

    return () => {
    set{{ inputs.value | pascal }}()
  }
  }, [])

  return { {{ inputs.value }} };
};

```

# `src/features/{{ inputs.value }}/components/{{ inputs.value | pascal }}Panel.tsx`

```typescript
import React from 'react'
import { PlainPanel } from "components/panels/plainPanel";
import { use{{ inputs.value | pascal }} } from "../hooks/use{{ inputs.value | pascal }}";

export const {{ inputs.value | pascal }}Panel = () => {
  return (
    <PlainPanel title="{{ inputs.value | pascal }}">{{ inputs.value | pascal }}</ PlainPanel>
  )
}

```
