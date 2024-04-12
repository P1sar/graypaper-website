import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const KeywordAbstract = `<span class="abstract-word">Abstract.</span>`;
const KeywordJam = `<span class="jam"><span>J</span>am</span>`;

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Resources: "Resources",
          Prize: "Prize",
          Tour: "Tour",
          Download: "Download",
          News: "News",
          Contribute: "Contribute",
          "Coming soon": "Coming soon...",
          "Resources.Download": "Get a copy of the Graypaper here:",
          "Resources.Contribute": "Join the JAM in our [matrix] space:",
          "Graypaper.Title":
            '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />A SEMI-COHERENT SCALABLE TRUSTLESS VM',
          "Abstract.p1": `${KeywordAbstract} We present a comprehensive and formal definition of ${KeywordJam}, a protocol combining elements of both <i>Polkadot</i> and <i>Ethereum</i>. In a single coherent model, ${KeywordJam} provides a global singleton permissionless object environment&#8212;much like the smart-contract environment pioneered by Ethereum&#8212;paired with secure sideband computation parallelized over a scalable node network, a proposition pioneered by Polkadot.`,
          "Abstract.p2": `${KeywordJam} introduces a decentralized hybrid system offering smart-contract functionality structured around a secure and scalable in-core/on-chain dualism. While the smart-contract functionality implies some similarities with Ethereum&#x2019;s paradigm, the overall model of the service offered is driven largely by underlying architecture of Polkadot.`,
          "Abstract.p3": `${KeywordJam} is permissionless in nature, allowing anyone to deploy code as a service on it for a fee commensurate with the resources this code utilizes and to induce execution of this code through the procurement and allocation of <i>core-time</i>, a metric of resilient and ubiquitous computation, somewhat similar to the purchasing of gas in Ethereum. We already envision a Polkadot-compatible <i>CoreChains</i> service.`,
          "CTA.Download": "Read the Graypaper",
        },
      },
      es: {
        translation: {
          Resources: "Recursos",
          Prize: "Premio",
          Tour: "Tour",
          Download: "Descargar",
          News: "Noticias",
          Contribute: "Contribuir",
          "Coming soon": "Próximamente...",
          "Resources.Download": "Obtén una copia del Graypaper aquí:",
          "Resources.Contribute": "Únete al JAM en nuestro espacio [matrix]:",
          "Graypaper.Title":
            '<span style="white-space: nowrap">JOIN-ACCUMULATE MACHINE:</span><br />Una máquina virtual escalable, semi-coherente y sin confianza',
          "Abstract.p1": `${KeywordAbstract} Presentamos una definición completa y formal de ${KeywordJam}, un protocolo que combina elementos tanto de <i>Polkadot</i> como de <i>Ethereum</i>. En un modelo coherente único, ${KeywordJam} proporciona un entorno de objeto global sin permisos y singleton&#8212;muy similar al entorno de contrato inteligente pionero de Ethereum&#8212;emparejado con cálculo de banda lateral seguro paralelizado sobre una red de nodos escalable, una propuesta pionera de Polkadot.`,
          "Abstract.p2": `${KeywordJam} introduce un sistema híbrido descentralizado que ofrece funcionalidad de contrato inteligente estructurada alrededor de un dualismo seguro y escalable en el núcleo/en la cadena. Aunque la funcionalidad de contrato inteligente implica algunas similitudes con el paradigma de Ethereum, el modelo general del servicio ofrecido está impulsado en gran medida por la arquitectura subyacente de Polkadot.`,
          "Abstract.p3": `${KeywordJam} es de naturaleza sin permisos, lo que permite a cualquiera implementar código como servicio en él por una tarifa proporcional a los recursos que este código utiliza y para inducir la ejecución de este código a través de la adquisición y asignación de <i>tiempo de núcleo</i>, una métrica de cálculo resiliente y ubicuo, algo similar a la compra de gas en Ethereum. Ya prevemos un servicio de <i>CoreChains</i> compatible con Polkadot.`,
          "CTA.Download": "Lee el Graypaper",
        },
      },
      jp: {
        translation: {
          Resources: "リソース",
          Prize: "賞",
          Tour: "ツアー",
          Download: "ダウンロード",
          News: "ニュース",
          Contribute: "貢献する",
          "Coming soon": "近日公開...",
          "Resources.Download": "こちらでGraypaperのコピーを入手してください：",
          "Resources.Contribute": "[matrix]スペースでJAMに参加しよう：",
          "CTA.Download": "Graypaperを読む",
        },
      },
      cn: {
        translation: {
          Resources: "资源",
          Prize: "奖",
          Tour: "旅游",
          Download: "下载",
          News: "新闻",
          Contribute: "贡献",
          "Coming soon": "即将推出...",
          "Resources.Download": "在这里获取Graypaper的副本：",
          "Resources.Contribute": "在我们的[matrix]空间加入JAM：",
          "CTA.Download": "阅读Graypaper",
        },
      },
    },
  });

export default i18n;