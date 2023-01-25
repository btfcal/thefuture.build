# Build the Future

<a href="https://thefuture.build"><img align="right" width="100" src="static/images/icon.png" title="BTF Logo"></a>

Website for [Build the Future](https://thefuture.build): UC Berkeley’s student-run entrepreneurship hub.

## Structured Content Creation

Hugo utilizes archetypes to create structured content from templates.
```
# To create a new newsletter entry
$ hugo new --kind newsletters newsletters/your-post-name

# To create a new event
$ hugo new --kind events events/your-event-name
```
The file that you need to configure is your last parameter (e.g. "/newsletters/your-post-name/index.md"). It will also be accessible at the same URL. Please follow the instructions in the default files to configure your post/event. 

## Development

### Dependencies

- Hugo v0.80.0

### Setup

Install all npm dependencies

```bash
yarn
```

Run development server

```bash
yarn dev
```

---

## About BTF

<div align="center">
  <a href="https://thefuture.build">
    <img width=100% src="static/images/header.png" alt="Build the Future">
  </a>
</div>

[Build The Future](https://thefuture.build) is UC Berkeley’s student-run entrepreneurship hub. Designed to teach and inspire students through a collaboration-driven environment to build startups, we aim to be the golden standard of entrepreneurship resource and learning.

&copy; 2023 Build the Future
