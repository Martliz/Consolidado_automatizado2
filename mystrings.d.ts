{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
  "solution": {
    "name": "guia-atencion-client-side-solution",
    "id": "e6374cf2-c189-46d5-82d7-d1c57cd6530d",
    "version": "1.0.0.0",
    "includeClientSideAssets": true,
    "skipFeatureDeployment": false,
    "isDomainIsolated": false,
    "developer": {
      "name": "OpenAI",
      "websiteUrl": "https://example.invalid",
      "privacyUrl": "https://example.invalid/privacy",
      "termsOfUseUrl": "https://example.invalid/terms",
      "mpnId": "Undefined-1.22.0"
    },
    "metadata": {
      "shortDescription": {
        "default": "Guía de Atención Call Center"
      },
      "longDescription": {
        "default": "Web part SPFx que incrusta la guía de scripts sin hosting externo."
      },
      "screenshotPaths": [],
      "videoUrl": "",
      "categories": [
        "Productivity"
      ]
    },
    "features": [
      {
        "title": "Guía de Atención feature",
        "description": "Instala la web part Guía de Atención",
        "id": "2d2e8d4c-f40f-474b-ae9a-08e799c8fea7",
        "version": "1.0.0.0",
        "componentIds": [
          "3e2e1f59-a7d1-4f73-9725-f568d7d5b3ee"
        ]
      }
    ]
  },
  "paths": {
    "zippedPackage": "solution/guia-atencion.sppkg"
  }
}
