---
id: citation-guide
title: Citation Guide
module_id: authoring
short_description: Guidelines for citing sources using APA style in the AI-Humanoid-Robotics Book
created_date: 2025-12-15
last_updated_date: 2025-12-15
---

# Citation Guide

This guide provides detailed instructions for citing sources using APA (American Psychological Association) style in the AI-Humanoid-Robotics Book, ensuring proper attribution and academic integrity.

## APA Citation Style Overview

The AI-Humanoid-Robotics Book follows the 7th edition of the APA Publication Manual for all citations and references. This ensures consistency and provides readers with the information needed to locate sources.

## In-Text Citations

### Basic Format
In-text citations include the author's last name and the year of publication:
- (Author, Year)
- (Author & Author, Year) for two authors
- (Author et al., Year) for three or more authors

### Examples
- Single author: (Khatib, 2023)
- Two authors: (Khatib & Park, 2022)
- Three or more authors: (Khatib et al., 2023)
- Direct quote: (Khatib, 2023, p. 145)

### Multiple Citations
When citing multiple sources in one location, arrange them alphabetically by author and separate with semicolons:
- (Khatib, 2023; Siciliano & Khatib, 2023; Zhang et al., 2022)

### No Date Available
When no date is available, use "n.d.":
- (Author, n.d.)

## Reference List Format

### Books
```
Author, A. A. (Year). Title of work: Capital letter also for subtitle. Publisher Name.

Example:
Khatib, O. (2023). Springer handbook of robotics. Springer.
```

### Journal Articles
```
Author, A. A., Author, B. B., & Author, C. C. (Year). Title of article. Title of Periodical, Volume(Issue), pages. https://doi.org/xx.xxx/yyyy

Example:
Siciliano, B., & Khatib, O. (2023). Robotics: The future of the field. Science Robotics, 8(78), eabq2345. https://doi.org/10.1126/scirobotics.abq2345
```

### Conference Papers
```
Author, A. A., & Author, B. B. (Year, Month). Title of paper. In A. A. Editor & B. B. Editor (Eds.), Title of conference proceedings (pp. page range). Publisher. URL if available

Example:
Kajita, S., et al. (2023, May). Biped walking pattern generation using model predictive control. In 2023 IEEE International Conference on Robotics and Automation (pp. 1234-1241). IEEE. https://doi.org/10.1109/ICRA48891.2023.10162345
```

### Technical Reports and Preprints
```
Author, A. A., & Author, B. B. (Year). Title of report (Report No. if applicable). Institution or Organization. URL if available

Example:
Robotics, C. C. (2023). Isaac Sim technical documentation (Version 2023.1). NVIDIA Corporation. https://docs.omniverse.nvidia.com/isaacsim
```

### Websites and Online Resources
```
Author, A. A. (Year, Month Day). Title of webpage. Site Name. URL

Example:
OpenAI. (2023, November 6). Whisper: Robust speech recognition via large-scale weak supervision. OpenAI. https://github.com/openai/whisper
```

### ROS Documentation and Packages
```
ROS Package Maintainer. (Year). Package_name: ROS package for [functionality] [Computer software]. Available from: https://github.com/[organization]/[package_name]

Example:
Open Robotics. (2023). navigation2: ROS 2 navigation framework [Computer software]. Available from: https://github.com/ros-planning/navigation2
```

## Special Considerations for Robotics Content

### Academic Papers
When citing academic papers in robotics, include relevant details:
- Conference name and year
- DOI if available
- Page numbers for direct quotes
- Version information when relevant

### Technical Documentation
For technical documentation (like ROS, Isaac Sim, etc.):
- Include version numbers when relevant
- Provide complete URLs
- Note the access date for documentation that may change

### Code Repositories
```
Author/Organization. (Year). Repository Name [Computer software]. Version (if applicable). URL

Example:
NVIDIA. (2023). Isaac ROS [Computer software]. Isaac Sim 2023.2. https://github.com/NVIDIA-ISAAC-ROS
```

### Standards and Specifications
```
Organization. (Year). Standard number: Title of standard. URL if available

Example:
Open Robotics. (2023). REP 2004: ROS 2 client library quality level definitions. https://www.ros.org/reps/rep-2004.html
```

## Common Robotics Sources and Their Citation Formats

### IEEE Conference Papers
```
Author, A., & Author, B. (Year). Paper title. In 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) (pp. 1234-1241). IEEE. https://doi.org/10.1109/IROS51168.2023.10345678
```

### arXiv Preprints
```
Author, A., Author, B., & Author, C. (Year). Title of paper (arXiv:YYMM.NNNNN [category]). arXiv. https://arxiv.org/abs/YYMM.NNNNN
```

### Software Libraries
```
Author, A. (Year). Library Name [Computer software]. Version X.Y.Z. https://github.com/username/repository
```

## Citation Examples by Content Type

### For Algorithms and Methods
When citing specific algorithms or methods:
- Include the original paper where the method was introduced
- If the method has been refined, cite the most recent authoritative source
- For ROS implementations, cite both the original paper and the ROS package

### For Hardware Platforms
```
Company Name. (Year). Product Name [Hardware specification]. URL

Example:
Unitree Robotics. (2023). Unitree G1 humanoid robot [Technical specification]. https://www.unitree.com/g1/
```

### For Simulation Environments
```
Company/Organization. (Year). Software Name [Simulation environment]. Version X.Y. URL

Example:
NVIDIA. (2023). Isaac Sim [Simulation environment]. Isaac Sim 2023.2. https://developer.nvidia.com/isaac-sim
```

## Integration with Docusaurus Markdown

### In-Text Citations in Markdown
```markdown
According to recent research, dynamic balance control is crucial for humanoid locomotion (Kajita et al., 2023).
```

### Reference Lists in Markdown
```markdown
## References

Kajita, S., et al. (2023, May). Biped walking pattern generation using model predictive control. In 2023 IEEE International Conference on Robotics and Automation (pp. 1234-1241). IEEE. https://doi.org/10.1109/ICRA48891.2023.10162345

Siciliano, B., & Khatib, O. (2023). Robotics: The future of the field. Science Robotics, 8(78), eabq2345. https://doi.org/10.1126/scirobotics.abq2345
```

## Quality Assurance for Citations

### Verification Checklist
Before finalizing any document with citations, verify:
- [ ] All in-text citations have corresponding references
- [ ] All references are cited in the text
- [ ] URLs are functional
- [ ] DOIs are valid and functional
- [ ] Page numbers are correct for direct quotes
- [ ] Publisher information is complete

### Accuracy Requirements
- Verify author names and spellings
- Confirm publication years
- Check that titles are accurate and complete
- Ensure proper capitalization following APA rules
- Validate that DOIs and URLs are correct

## Common Citation Mistakes to Avoid

- Inconsistent citation style within a document
- Missing page numbers for direct quotes
- Outdated URLs or DOIs
- Incomplete reference information
- Mixing different citation styles
- Citing sources that were not actually consulted
- Using informal sources without proper verification

## Special Cases

### Personal Communications
Personal communications are cited in-text only and not included in the reference list:
- (A. Smith, personal communication, January 15, 2024)

### Unpublished Work
For unpublished work that is available:
- Include "Unpublished manuscript" or "Manuscript in preparation"
- Provide as much information as possible
- Include URL if available

### Software and Code
For software and code citations, include:
- Author/developer
- Year of publication or last update
- Name of software and version
- Type of material [Computer software]
- URL for access

## Updating Citations

### When Sources Change
- Monitor for updated versions of technical documentation
- Update DOIs and URLs when they change
- Note the date when online sources were accessed if they are likely to change
- Verify that citations to preprints are updated when they are published in peer-reviewed venues

### Version Tracking
- Include version numbers for software and technical documentation
- Update citations when significant updates change the content
- Maintain consistency with the version used during writing

## Tools for Managing Citations

### Reference Managers
Consider using reference management tools such as:
- Zotero (free)
- Mendeley (free with account)
- EndNote (commercial)

These tools can help generate properly formatted citations and reference lists.

### Verification Tools
- Cross-reference DOI and URL validity
- Use academic databases to verify publication details
- Check publisher websites for accurate citation information

Following these guidelines ensures that all sources in the AI-Humanoid-Robotics Book are properly attributed according to academic standards while maintaining the technical accuracy and credibility of the content.