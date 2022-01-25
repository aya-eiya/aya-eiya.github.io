import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '../components/Layout'

export default function Company(): ReactElement {
  return (
    <>
      <Head>
        <title>AY HOUSE | 会社概要</title>
      </Head>
      <Layout>
        <div className="flex pt-4 content-center flex-col w-3/4 mx-auto">
          <h1 className="text-xl text-center">会社概要</h1>
          <table className="table-fixed border-collapse border mt-4">
            <tbody>
              <tr>
                <th className="border w-32 p-3 font-normal bg-gray-100">
                  社名
                </th>
                <td className="border p-3">AY合同会社 （英： AY.LLC.）</td>
              </tr>
              <tr>
                <th className="border w-32 p-3 font-normal bg-gray-100">
                  代表社員
                </th>
                <td className="border p-3">綾部 英俊</td>
              </tr>
              <tr>
                <th className="border w-32 p-3 font-normal bg-gray-100">
                  設立
                </th>
                <td className="border p-3">令和3年（2021年） 8月 4日</td>
              </tr>
              <tr>
                <th className="border w-32 p-3 font-normal bg-gray-100">
                  所在地
                </th>
                <td className="border p-3">
                  東京都品川区旗の台１丁目１１番９号
                </td>
              </tr>
              <tr>
                <th className="border w-32 p-3 font-normal bg-gray-100">
                  事業内容
                </th>
                <td className="border p-3">
                  シェアハウス / 民泊施設 の管理・運営
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  )
}
