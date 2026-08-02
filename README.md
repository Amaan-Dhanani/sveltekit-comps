# Introduction

So, TreltaSev created a component library, so I decided to create my own (using his permission of course). I also like the components in his library, so his library is a dependency of mine. This means that to import his components, you can do so in my library.

### Migration Example

Instead of importing from the base library:
```svelte
import { Flex } from 'sk-clib/ui';
```

You can import directly from this library:
```svelte
import { Flex } from '@amaand/sveltekit-comps';
```

---

# Available Components

| Component | Description | Original Source |
| :--- | :--- | :--- |
| **CodeInput** | One-Time Password (OTP) codes | Custom |
| **Dropdown** | Form-optimized dropdown selection | Custom |
| **Input** | Form input supporting text and password visibility toggle | Custom |
| **LightDark** | Application theme toggle switcher | Custom |
| **Textarea** | Multi-line text input field | Custom |
| **TextRedactor** | Redacts sensitive data like emails, tokens, or custom text | Custom |
| **Button** | Highly interactive button utility | sk-clib |
| **Frame** | Fundamental `<div>` container wrapper | sk-clib |
| **Flex** | Flexbox layout `<div>` alignment container | sk-clib |
| **Text** | Typography and text rendering element | sk-clib |
| **ThemeInit** | Global theme initialization and styling helper | sk-clib |
| **Spacer** | Layout spacing structural element | sk-clib |

*Note on Input Components: Both libraries offer an input field. To access the sk-clib variation instead of the custom version, use `InputTreltaSev`. Future updates may combine features from both components.*

---

# Inline Editor Documentation
This project uses Svelte's @component tag to provide instant, inline documentation directly in your code editor.To understand what any component does, how to use it, or what props it accepts, simply hover your cursor over the component's name in any file. A tooltip will automatically pop up with its summary and usage rules so you do not have to open the source file or search external docs.

---

# Roadmap

The following components are currently under development and will be released in an upcoming version:
* **BottomBarNavigation** — Mobile-first bottom navigation bar.
* **SuccessErrorToast** — Global status alert notification banner.

---

# Release History

Versions follow the `Major.Minor.Patch` format:

- **Major** → Breaking changes or major redesigns
- **Minor** → New features that don't break existing code
- **Patch** → Bug fixes and small corrections

| Release | Date | Description |
| :--- | :--- | :--- |
| **`0.1.4`** | 8/2/2026 | **Patch Release** — Fixed improper TailwindCSS for **Input** component, added and tested style imports. |
| **`0.1.3`** | 8/1/2026 | **Patch Release** — Removed unused development dependencies, completing the migration to `@iconify/svelte`. |
| **`0.1.2`** | 8/1/2026 | **Patch Release** — Removed the remaining `unplugin-icons` configuration from the build setup. |
| **`0.1.1`** | 8/1/2026 | **Patch Release** — Fixed icon imports by migrating from `unplugin-icons` to `@iconify/svelte`, improving compatibility when using the library as an npm dependency. |
| **`0.1.0`** | 8/1/2026 | **Experimental Public Release** — Initial public release featuring **CodeInput, Dropdown, Input, InputTreltaSev, LightDark, Textarea, TextRedactor, Button, Frame, Flex, Text, ThemeInit, and Spacer**. |