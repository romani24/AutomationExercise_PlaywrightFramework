# 🎭 Automation Exercise - E2E Testing Framework

[![Playwright](https://img.shields.io/badge/Playwright-1.57.0-45ba4b?logo=playwright)](https://playwright.dev/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber)](https://cucumber.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

E2E test automation framework using **Playwright** + **Cucumber** (BDD), with Docker/Podman support and Allure reports.

## ✨ Features

- 🎭 **Playwright** - Modern and fast browser automation
- 🥒 **Cucumber/Gherkin** - Tests in natural language (BDD)
- 🐳 **Docker/Podman** - Containerized execution
- 📊 **Allure Reports** - Interactive and professional reports
- 🔄 **Dynamic Data** - Unique emails and phone numbers automatically
- 🏷️ **Tags** - Test organization and selective execution

## 📋 Prerequisites

- Node.js 18+
- Docker or Podman (for container execution)

## 🚀 Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 🧪 Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:smoke` | Run only @smoke tests |
| `npm run test:regression` | Run regression tests |
| `npm run test:headed` | Run with visible browser |
| `npm run test:podman` | Run in Podman container |
| `npm run test:docker` | Run in Docker container |

### Run by specific tags

```bash
npx cucumber-js --tags "@signup"
npx cucumber-js --tags "@smoke and @positive"
npx cucumber-js --tags "not @slow"
```

## 📊 Reports

After running tests, generate HTML report:

```bash
npm run report
```

Report will be available at `test-results/html-report/index.html`

### Allure Reports (Recommended)

```bash
# Run tests + generate + open report
npm run allure

# Or step by step:
npm test                    # Run tests
npm run allure:generate     # Generate report
npm run allure:open         # Open in browser
```

## 📁 Project Structure

```
├── src/
│   ├── hooks/              # Cucumber hooks (Before/After)
│   ├── test/
│   │   ├── features/       # .feature files (Gherkin)
│   │   ├── steps/          # Step definitions
│   │   └── page_objects/   # Locators and elements
│   └── utils/              # Utilities and helpers
├── test-results/           # Results and screenshots
├── cucumber.json           # Cucumber configuration
├── Dockerfile              # Container for CI/CD
└── package.json
```

## 🏷️ Available Tags

| Tag | Description |
|-----|-------------|
| `@smoke` | Quick sanity tests |
| `@regression` | Complete regression tests |
| `@signup` | Registration tests |
| `@login` | Login tests |
| `@positive` | Positive scenarios |
| `@negative` | Negative scenarios |

## 🐳 Run in Container

### Docker
```bash
# Build image
docker build -t playwright-tests .

# Run tests
docker run --rm playwright-tests
```

### Podman
```bash
# Build image
podman build -t playwright-tests .

# Run tests
podman run --rm playwright-tests

# Or use the script
npm run test:podman
```

## 📝 Adding New Tests

1. Create `.feature` file in `src/test/features/`
2. Add steps in `src/test/steps/`
3. Add locators in `src/test/page_objects/`

### Available Steps

```gherkin
# Navigation
Given I navigate to "https://example.com"

# Interactions
When I click "selector.button"
When I fill "text" in "selector.input"
When I select "value" from "selector.dropdown"
When I check "selector.checkbox"

# Dynamic data (never repeats!)
When I fill unique email in "selector.emailField"
When I fill random phone in "selector.phoneField"
When I fill random text in "selector.textField"

# Waits
When I wait 5 seconds

# Assertions
Then I should see "selector.element"
Then I should see text "Expected text"
Then the URL should contain "/page"
```

## 🤝 Contributing

1. Fork the project
2. Create branch (`git checkout -b feature/new-feature`)
3. Commit (`git commit -m 'Add new feature'`)
4. Push (`git push origin feature/new-feature`)
5. Open Pull Request

## 🛠️ Technologies

| Technology | Version | Description |
|------------|---------|-------------|
| [Playwright](https://playwright.dev/) | 1.57.0 | Browser automation |
| [Cucumber](https://cucumber.io/) | 12.x | BDD framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Typed language |
| [Allure](https://allurereport.org/) | 2.x | Reports |
| [Docker](https://www.docker.com/) | - | Containerization |

## 📄 License

ISC

---

⭐ If this project helped you, leave a star!
