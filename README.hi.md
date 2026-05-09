<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.md">English</a> | <a href="README.it.md">Italiano</a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/research-packs/readme.png" width="400" alt="research-packs" />
</div>

<div align="center">

[![CI](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml/badge.svg)](https://github.com/mcp-tool-shop-org/research-packs/actions/workflows/verify.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div

**स्थिर अनुसंधान पैकेज, जिनमें स्रोत की सत्यता, दावों की पता लगाने की क्षमता और ऑडिट रसीदें शामिल हैं।**

इस मोनोरिपो में मौजूद प्रत्येक पैकेज को [`research-os`](https://github.com/mcp-tool-shop-org/research-os) के माध्यम से स्थिर किया गया है - यह एक नियंत्रित अनुसंधान प्रणाली है जो एक नियम लागू करती है: *स्रोत की सत्यता के बिना कोई संश्लेषण नहीं।* प्रत्येक पैकेज में इसके सभी प्रमाण, प्रतिकूल समीक्षा इतिहास, गेट परिणाम, विरोधाभासों का समाधान और एक क्रिप्टोग्राफिक स्थिर रसीद शामिल है, जो प्रत्येक मानक कलाकृति की पहचान करती है।

---

## तीन श्रेणियां

यह मोनोरिपो तीन अलग-अलग उपयोगकर्ताओं के लिए बनाया गया है।

### श्रेणी 1 - सार्वजनिक संश्लेषण
*उन लोगों के लिए जो उत्तर चाहते हैं।*

प्रत्येक पैकेज का `README.md` एक मानव-पठनीय संश्लेषण है जो पैकेज के `final-report.md` से प्राप्त होता है। इसमें स्वीकृत दावों को आईडी के साथ उद्धृत किया गया है, ताकि प्रत्येक कथन के स्रोत तक पहुंचा जा सके। यदि आप अनुसंधान निष्कर्षों को समझने के लिए किसी भी रिकॉर्ड को न छूकर जानकारी प्राप्त करना चाहते हैं, तो यहां से शुरुआत करें।

→ [`packages/`](packages/) पर जाएं

### श्रेणी 2 - स्थिर प्रमाण पैकेज
*उन लोगों के लिए जो दावों का ऑडिट करना चाहते हैं।*

प्रत्येक पैकेज की `pack/` निर्देशिका में पूरा स्थिर पैकेज होता है: स्रोत कार्ड, उद्धरण रिकॉर्ड, `claims.jsonl`, `claim-reviews.jsonl`, विरोधाभासों का समाधान, निर्णय, गेट परिणाम और `audits/freeze-receipt.json`। स्थिर रसीद में प्रत्येक मानक कलाकृति के sha256 फ़िंगरप्रिंट होते हैं - जिन्हें `scripts/verify-pack.mjs` के साथ स्वतंत्र रूप से सत्यापित किया जा सकता है।

→ पूर्ण प्रवेश अनुबंध के लिए [`docs/artifact-contract.md`](docs/artifact-contract.md) देखें।

### श्रेणी 3 - विधि प्रमाण
*उन लोगों के लिए जो स्वयं `research-os` का मूल्यांकन कर रहे हैं।*

`docs/` और `catalog.json` विधि मूल्यांकन के लिए संसाधन हैं। `catalog.json` प्रत्येक स्वीकृत पैकेज का एक मशीन-पठनीय इंडेक्स है, जिसमें विषय, स्थिर तिथि और दावों की संख्या शामिल है। `docs/source-quality-notes.md` प्रत्येक आर्क से प्राप्त निष्कर्षों को संकलित करता है। `docs/operator-playbook.md` उन ऑपरेटिंग सिद्धांतों को दर्शाता है जो पैकेजों को स्थिर करने के लिए प्राप्त किए गए हैं।

→ [`docs/`](docs/) और [`catalog.json`](catalog.json) देखें

---

## सूची

| पैकेज | विषय | स्थिर | स्वीकृत दावे |
|---------|-------|--------|-----------------|
| [research-os-self-dogfood](packages/research-os-self-dogfood/) | research-os पैकेज संरचना | 2026-05-08 | 296 |

---

## प्रवेश अनुबंध

किसी भी पैकेज को `packages/` में स्वीकार नहीं किया जाता है यदि उसमें निम्नलिखित में से कोई भी नहीं है:

- `pack/audits/freeze-receipt.json` — sha256 फ़िंगरप्रिंट, बाहरी रूप से सत्यापित
- `synthesis/final-report.md` — उद्धरण-सफाई, दावा-ट्रैसेबल
- `synthesis/decision-brief.md` — हैंडऑफ-मोड निर्णय सारांश
- `pack.manifest.json` — प्रत्येक पैकेज के लिए मानक मेटाडेटा
- `README.md` — अंतिम रिपोर्ट से प्राप्त मानव-पठनीय संश्लेषण

आधे-स्थिर पैकेजों को कोई निर्देशिका नहीं मिलती है।

---

## एक पैकेज को सत्यापित करें

```bash
npm install
node scripts/verify-pack.mjs packages/research-os-self-dogfood
```

`verify-pack.mjs` स्थिर रसीद को फिर से पढ़ता है और प्रत्येक मानक कलाकृति के लिए sha256 फ़िंगरप्रिंट की पुनर्गणना करता है। PASS का मतलब है कि पैकेज की सामग्री उस चीज़ के समान बाइट-समान है जो स्थिर थी।

---

## सुरक्षा

इस रिपॉजिटरी में कोई क्रेडेंशियल, कोई गुप्त जानकारी और कोई टेलीमेट्री नहीं है। यह एक स्थिर संग्रह है। पूर्ण खतरे के मॉडल और प्रकटीकरण प्रक्रिया के लिए [SECURITY.md](SECURITY.md) देखें।

---

## संबंधित

- [`research-os`](https://github.com/mcp-tool-shop-org/research-os) — वह नियंत्रण प्रणाली जो इन पैकेजों का निर्माण करती है
- [`mcp-tool-shop-org`](https://github.com/mcp-tool-shop-org) — व्यापक संगठन

---

<div align="center">
Built by <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
</div>
