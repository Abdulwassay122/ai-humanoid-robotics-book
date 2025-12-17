---
id: authoring-guide
title: Authoring Guide
module_id: authoring
short_description: Guidelines for writing and formatting content in the AI-Humanoid-Robotics Book
created_date: 2025-12-15
last_updated_date: 2025-12-15
---

# Authoring Guide

This guide provides standards and best practices for creating content in the AI-Humanoid-Robotics Book, ensuring consistency and quality across all chapters.

## Document Structure

### Front Matter
Every document must include proper front matter with the following fields:

```yaml
---
id: unique-document-identifier
title: Document Title
module_id: module-identifier
short_description: Brief description of the document
created_date: YYYY-MM-DD
last_updated_date: YYYY-MM-DD
learning_outcomes:  # Include if applicable
  - Learning outcome 1
  - Learning outcome 2
keywords:  # Include if applicable
  - keyword1
  - keyword2
authors:  # Include if applicable
  - Author Name
---
```

### Document Sections
Follow this standard structure:

```markdown
# Main Title

Brief introduction to the topic.

## Section Title

Content for the section.

### Subsection Title

More detailed content.

## Another Section

Additional content.
```

## Markdown Conventions

### Headers
- Use `#` for main titles (only one per document)
- Use `##` for main sections
- Use `###` for subsections
- Avoid `####` and deeper nesting when possible

### Text Formatting
- Use **bold** for emphasis on key terms
- Use *italics* for book titles, foreign terms, or subtle emphasis
- Use `inline code` for technical terms, file names, and code snippets
- Use ```code blocks``` for multi-line code examples

### Lists
Use consistent formatting for lists:

```markdown
- First item
- Second item
  - Nested item
- Third item
```

### Links
Internal links within the book:
```markdown
[Link text](./relative-path-to-document)
[Link text](../relative-path-to-document)
```

External links:
```markdown
[Link text](https://external-url.com)
```

## Code Examples

### Inline Code
Use backticks for inline code: `variable_name` or `function_name()`.

### Code Blocks
Use triple backticks with language specification:

```python
def example_function():
    """Example function with docstring."""
    return "Hello, Humanoid Robotics!"
```

```bash
# Example bash command
ros2 run package_name executable_name
```

```yaml
# Example YAML configuration
parameter_name: parameter_value
another_param:
  nested_param: nested_value
```

### ROS 2 Code Conventions
When showing ROS 2 code examples:

```python
import rclpy
from rclpy.node import Node

class ExampleNode(Node):
    def __init__(self):
        super().__init__('example_node')
        # Node initialization code
```

## Technical Content Guidelines

### Terminology Consistency
- Use consistent terminology throughout the book
- Define technical terms when first used
- Follow standard robotics and AI nomenclature
- Capitalize proper names (ROS 2, NVIDIA Isaac, etc.)

### Mathematical Notation
For mathematical expressions, use standard notation:
- Use LaTeX-style inline math: $x = y + z$
- For complex equations, use display math:
  ```markdown
  $$E = mc^2$$
  ```

### Figures and Diagrams
Reference figures as follows:
```markdown
![Figure description](/static/diagrams/diagram-name.png)

*Figure 1: Description of the figure.*
```

### Tables
Use markdown table formatting:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

## Content Quality Standards

### Writing Style
- Use clear, concise language
- Write in active voice when possible
- Define acronyms and technical terms on first use
- Maintain consistent tone throughout the book
- Use gender-neutral language

### Technical Accuracy
- Verify all technical claims
- Include citations for external information
- Test all code examples
- Ensure all commands are accurate
- Keep information up-to-date with current versions

### Learning Outcomes
- Define specific, measurable learning outcomes
- Align content with stated outcomes
- Include practical examples and applications
- Provide exercises or challenges when appropriate

## Cross-References

### Linking to Other Chapters
Use relative paths to link to other chapters in the book:
```markdown
See [Kinematics and Dynamics](./part-vi-engineering/kinematics-dynamics) for more information.
```

### Linking to External Resources
When referencing external resources, provide complete information:
```markdown
For more details, see the [official ROS 2 documentation](https://docs.ros.org/).
```

## Images and Media

### Image Placement
- Place images close to relevant text
- Include descriptive alt text
- Use appropriate file formats (PNG for diagrams, JPEG for photos)
- Store images in the `/static/img/` or `/static/diagrams/` directories

### Image Sizing
Most images will be displayed at full width, but you can specify sizing in HTML if needed:
```html
<img src="/static/img/example.png" alt="Description" width="50%"/>
```

## Citations and References

### In-Text Citations
Use APA style for in-text citations:
- Single author: (Smith, 2023)
- Multiple authors: (Smith & Jones, 2023) or (Smith et al., 2023)
- Direct quotes: (Smith, 2023, p. 45)

### Reference List
Include a references section at the end of relevant documents:
```markdown
## References

Smith, J. (2023). *Title of the book*. Publisher.

Smith, J., & Jones, M. (2023). Article title. *Journal Name*, 15(3), 123-145.
```

## Review and Validation

### Self-Review Checklist
Before submitting content, ensure:
- [ ] All learning outcomes are addressed
- [ ] Technical information is accurate
- [ ] Code examples are tested and functional
- [ ] Links work correctly
- [ ] Images are properly included and attributed
- [ ] Content is consistent with book style
- [ ] Grammar and spelling are correct

### Content Validation
- Verify all ROS 2 commands work as described
- Test all code examples in appropriate environments
- Ensure mathematical equations are correct
- Validate all external links
- Confirm proper attribution for all sources

## Version Control and Updates

### Document Updates
- Update `last_updated_date` when making changes
- Maintain backward compatibility when possible
- Document breaking changes clearly
- Use clear commit messages when using version control

### Collaboration Guidelines
- Use clear, descriptive commit messages
- Follow the established document structure
- Maintain consistency with existing content
- Coordinate with other authors on cross-references

## Common Pitfalls to Avoid

- Avoid overly complex sentences
- Don't assume prior knowledge without stating prerequisites
- Avoid vague terms like "as mentioned before" without specific references
- Don't include platform-specific paths without alternatives
- Avoid copyrighted material without permission
- Don't make claims without verification

## Tools and Resources

### Markdown Editors
- Visual Studio Code with Markdown extensions
- Docusaurus documentation for syntax reference
- Markdown linters for consistency checking

### Code Formatting
- Follow PEP 8 for Python code
- Use consistent indentation (4 spaces for Python)
- Include meaningful comments
- Follow ROS 2 coding standards

This guide should be followed consistently across all chapters to maintain quality and coherence throughout the AI-Humanoid-Robotics Book.