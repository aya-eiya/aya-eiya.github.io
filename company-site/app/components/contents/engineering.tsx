import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
const experiences = [
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
    title: '米国法務処理事業者向けソフト開発 プロジェクト・サーベイ、コンサル',
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
]

export default function Engineering(): ReactElement {
  return (
    <>
      <HeadLine id="engineering">ソフトウェア開発支援</HeadLine>
      <div className="mt-10 mx-auto">
        <p>
          受託時開発事業として、高品質なソフトウェア開発サービスを提供しています
        </p>
        <p className="mt-2">
          20年以上の開発キャリを持つ弊社代表がウェブアプリケーション、モバイルアプリケーション、システムインテグレーション、AI・機械学習ソリューションなどに対応いたします
        </p>
        <p className="mt-2">
          開発プロセスに関するコンサルや、組織づくりのアドバイス、技術顧問などもご相談いただけます
        </p>
      </div>
      <div className="mt-10 mx-auto">
        <h3 className="text-lg mb-4">開発実績</h3>
        <dl className="pl-2">
          {experiences.map((experience, index) => (
            <>
              <dt key={`caption_${index}`} className="text-lg mt-4">
                {experience.title}
              </dt>
              <dd key={`description_${index}`} className="px-2 mt-2">
                {experience.description}
              </dd>
              <dd key={`elem_${index}`} className="px-2 mt-2">
                使用技術/要素など: {experience.technologies}
              </dd>
            </>
          ))}
        </dl>
      </div>
    </>
  )
}
