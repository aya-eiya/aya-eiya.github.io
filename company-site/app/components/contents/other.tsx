import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
const entries = [
  {
    title: 'MyniQ',
    url: 'https://daily-ai-generated-quiz.deno.dev/?from=corp',
    description:
      'AIが生成する英語の短文と読解力テストが毎日出題されます。代表がLLMの習作として作成したサービスです',
  },
]

export default function Other(): ReactElement {
  return (
    <>
      <HeadLine id="other">ニュース・リンク</HeadLine>
      <div className="mt-10 mx-auto">
        <p>弊社事業に関連するリンクや情報</p>
      </div>
      <div className="mt-10 mx-auto">
        <h3 className="text-lg mb-4">リンク</h3>
        <ul className="pl-2">
          {entries.map((entry, index) => (
            <a key={index} href={entry.url} target={'_blank'}>
              <dl>
                <dt className="text-lg mt-4">{entry.title}</dt>
                <dd className="px-2 mt-2">{entry.description}</dd>
              </dl>
            </a>
          ))}
        </ul>
      </div>
    </>
  )
}
