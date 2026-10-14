# Benson Fan · Hugo Blox Academic CV

This personal homepage is based on the official [Hugo Blox Academic CV template](https://github.com/HugoBlox/hugo-theme-academic-cv).

Research interests: differentiable optical design, fisheye lens imaging, computational spectral imaging.

- [Official template provenance](TEMPLATE_ORIGIN.txt)
- [Upstream MIT license](LICENSE.md)

Edit personal data in `data/authors/me.yaml`. Homepage sections are in `content/en/_index.md`. The published site is English-only; Chinese drafts are retained locally and excluded from the repository.

The GitHub Pages workflow builds the actual Hugo project. In repository settings, select **Pages → Source → GitHub Actions**.

Build: `pnpm install --frozen-lockfile`, then `pnpm run build`.
Preview: `pnpm run dev`.

The biography includes first-year PhD study at Nanjing University, supervisor links, and study in Optoelectronic Information Science and Engineering at Tongji University (2022–2026). Education history is currently included in the biography; the separate education list is empty. The profile photo is stored in `assets/media/authors/me.png`. Email, CV, projects, and publications have not been filled in.
