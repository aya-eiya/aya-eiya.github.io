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
        <p>弊社事業に関連するリンクや情報をご紹介いたします</p>
      </div>
      <div className="mt-10 mx-auto">
        <ul className="pl-2">
          {entries.map((entry, index) => (
            <a key={index} href={entry.url} target={'_blank'}>
              <dl className="flex flex-row">
                <dt className="text-lg w-16">{entry.title}</dt>
                <dd className="px-2">
                  <p className="underline">
                    {entry.url}
                    <span
                      title="外部リンク"
                      className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                    />
                  </p>
                  <p className="mt-2">{entry.description}</p>
                </dd>
              </dl>
            </a>
          ))}
        </ul>
      </div>
    </>
  )
}
