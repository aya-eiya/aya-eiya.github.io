'use client'

import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'

const texts = {
  ja: {
    title: 'ソフトウェア開発支援',
    description1:
      '受託時開発事業として、高品質なソフトウェア開発サービスを提供しています',
    description2:
      '20年以上の開発キャリを持つ弊社代表がウェブアプリケーション、モバイルアプリケーション、システムインテグレーション、AI・機械学習ソリューションなどに対応いたします',
    description3:
      '開発プロセスに関するコンサルや、組織づくりのアドバイス、技術顧問などもご相談いただけます',
    experienceTitle: '開発実績',
    technologies: '使用技術/要素など:',
    experiences: [
      {
        title: '英語学習アプリ',
        technologies: 'JavaScript, ReactNative, Firebase',
        description:
          'メインプログラマーとして、ユーザーフレンドリーなインターフェースとリアルタイムデータベースを用いた効率的な学習環境を構築しました',
      },
      {
        title: '暗号通貨取引所開発 アーキテクト',
        technologies: 'Go, Ethereum, Mysql',
        description:
          '暗号通貨取引所のアーキテクトとして、システムの設計から実装、データベース設計と管理など幅広く担当しました',
      },
      {
        title: 'モビリティサービスAPIのフルサーバレス実装PoC',
        technologies: 'AWS Lambda',
        description:
          'フルサーバレスアーキテクチャを用いたモビリティサービスAPIのPoC(概念実証)を実施し、スケーラブルでコスト効率の高いシステムを実現しました',
      },
      {
        title:
          '米国法務処理事業者向けソフト開発 プロジェクト・サーベイ、コンサル',
        technologies: 'ソフトウェアアーキテクチャ, 開発プロセス',
        description:
          '米国法務処理事業者向けのソフトウェア開発において、プロジェクトの調査とコンサルティングを行い、最適なソフトウェアアーキテクチャと開発プロセスを提案しました',
      },
      {
        title: 'ロボット投資サービスバックエンド開発',
        technologies: 'Scala, AWS',
        description:
          'ロボット投資サービスのバックエンドを開発し、高パフォーマンスなデータ処理とリアルタイム分析機能を提供しました',
      },
      {
        title: 'ブロックチェーン金融事業サービス開発',
        technologies: 'Typescript, GraphQL, React, Next.js, AWS',
        description:
          'ブロックチェーンを活用した金融サービスの開発を行い、フロントエンドからバックエンドまで一貫したシステムを構築しました。その後技術顧問として継続して事業に関係しています',
      },
      {
        title: 'フードデリバリービス開発',
        technologies: 'Flutter, Firebase',
        description:
          'フードデリバリーサービスのアプリケーションをFlutterとFirebaseを用いて開発し、ユーザーにスムーズな注文体験を提供しました',
      },
      {
        title: 'スキマバイトアプリ・サービス',
        technologies: 'Go, TypeScript, ReactNative, Vue',
        description:
          '短期間で働けるバイトサービスアプリを開発し、多様な技術を駆使してユーザーと雇用者をマッチングするプラットフォームを実現しました',
      },
      {
        title: '生成AIによる学習コンテンツ作成支援サービス',
        technologies: 'TypeScript, Python, LLM',
        description:
          '生成AIによる英語学習者むけの学習コンテンツを生成し配布するサービスを開発し、ユーザーの継続的な英語学習へのサポートを実現しました',
      },
    ],
  },
  en: {
    title: 'Software Development',
    description1:
      'We provide high-quality software development services as a contract development business',
    description2:
      'Our CEO, with over 20 years of development experience, handles web applications, mobile applications, system integration, and AI/machine learning solutions',
    description3:
      'We also offer consulting on development processes, organizational development advice, and technical advisory services',
    experienceTitle: 'Development Portfolio',
    technologies: 'Technologies/Elements:',
    experiences: [
      {
        title: 'English Learning App',
        technologies: 'JavaScript, ReactNative, Firebase',
        description:
          'As the lead programmer, built an efficient learning environment with a user-friendly interface and real-time database',
      },
      {
        title: 'Cryptocurrency Exchange Development - Architect',
        technologies: 'Go, Ethereum, Mysql',
        description:
          'Served as architect for a cryptocurrency exchange, handling system design, implementation, and database design/management',
      },
      {
        title: 'Mobility Service API Serverless Implementation PoC',
        technologies: 'AWS Lambda',
        description:
          'Conducted Proof of Concept for a mobility service API using full serverless architecture, achieving a scalable and cost-efficient system',
      },
      {
        title:
          'US Legal Service Provider Software Development - Project Survey & Consulting',
        technologies: 'Software Architecture, Development Process',
        description:
          'Conducted project survey and consulting for US legal service provider software development, proposing optimal software architecture and development processes',
      },
      {
        title: 'Robo-Investment Service Backend Development',
        technologies: 'Scala, AWS',
        description:
          'Developed backend for a robo-investment service, providing high-performance data processing and real-time analytics',
      },
      {
        title: 'Blockchain Financial Service Development',
        technologies: 'Typescript, GraphQL, React, Next.js, AWS',
        description:
          'Developed a blockchain-based financial service, building a comprehensive system from frontend to backend. Continue to serve as technical advisor',
      },
      {
        title: 'Food Delivery Service Development',
        technologies: 'Flutter, Firebase',
        description:
          'Developed a food delivery service application using Flutter and Firebase, providing users with a smooth ordering experience',
      },
      {
        title: 'Part-time Job Matching App Service',
        technologies: 'Go, TypeScript, ReactNative, Vue',
        description:
          'Developed a short-term job matching service app, creating a platform connecting users and employers using various technologies',
      },
      {
        title: 'AI-Generated Learning Content Support Service',
        technologies: 'TypeScript, Python, LLM',
        description:
          "Developed a service generating and distributing English learning content using generative AI, supporting users' continuous English learning",
      },
    ],
  },
}

export default function Engineering(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <>
      <HeadLine id="engineering">{t.title}</HeadLine>
      <div className="mt-10 mx-auto">
        <p>{t.description1}</p>
        <p className="mt-2">{t.description2}</p>
        <p className="mt-2">{t.description3}</p>
      </div>
      <div className="mt-10 mx-auto">
        <h3 className="text-lg mb-4">{t.experienceTitle}</h3>
        {t.experiences.map((experience, index) => (
          <dl key={index} className="pl-2">
            <dt className="text-lg mt-4">{experience.title}</dt>
            <dd className="px-2 mt-2">{experience.description}</dd>
            <dd className="px-2 mt-2">
              {t.technologies} {experience.technologies}
            </dd>
          </dl>
        ))}
      </div>
    </>
  )
}
