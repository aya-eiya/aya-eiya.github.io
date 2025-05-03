'use client'

import { ReactElement } from 'react'
import { Room, Rooms, getRoomNames } from '../../domains/house'
import { useLanguage } from '../../contexts/LanguageContext'
import type { Lang } from '../../domains/house'

const defaultColor = '#B1D0E0'
const defaultWidth = 2
const unselectedColor = '#6998AB'
const selectedColor = '#406882'
const selectedWidth = 4

type FloorProps = {
  colors: Record<Room, string>
  strokeWidths: Record<Room, number>
  setRoom: (room: Room) => void
  roomNames: Record<Room, string>
  lang: Lang
}

export function FloorPlan({
  selected,
  setRoom,
}: {
  selected: Room
  setRoom: (room: Room) => void
}): ReactElement {
  const { lang } = useLanguage()
  const roomNames = getRoomNames(lang)

  const colors = Rooms.reduce(
    (i, r) => ({ ...i, [r]: r === selected ? selectedColor : unselectedColor }),
    {} as Record<Room, string>
  )
  const strokeWidths = Rooms.reduce(
    (i, r) => ({ ...i, [r]: r === selected ? selectedWidth : defaultWidth }),
    {} as Record<Room, number>
  )
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="p2">
          <Floor1
            colors={colors}
            strokeWidths={strokeWidths}
            setRoom={setRoom}
            roomNames={roomNames}
            lang={lang}
          />
          <p className="text-center">1F</p>
        </div>
        <div className="p2">
          <Floor2
            colors={colors}
            strokeWidths={strokeWidths}
            setRoom={setRoom}
            roomNames={roomNames}
            lang={lang}
          />
          <p className="text-center">2F</p>
        </div>
      </div>
    </div>
  )
}

function Floor1({
  colors,
  strokeWidths,
  setRoom,
  roomNames,
  lang,
}: FloorProps): ReactElement {
  return (
    <svg className="w-full" viewBox="0,0,1480.0,1280.0">
      <g className="stroke-brand-base">
        <g
          name="R_1fL"
          fill={colors.R_1fL}
          strokeWidth={strokeWidths.R_1fL}
          className={'cursor-pointer'}
          onClick={() => setRoom('R_1fL')}
        >
          <path d="M 2.0 2.0 h 455.0 v 273.0 h -455.0 v -273.0 z" />
          <path d="M 2.0 2.0 m 455.0 0.0 h 273.0 h 50.0 v 182.0 h -50.0 v 182.0 h -273.0 v -182.0 v -182.0 z" />
        </g>
        <g
          name="M_1fDomi"
          fill={colors.M_1fDomi}
          strokeWidth={strokeWidths.M_1fDomi}
          className={'cursor-pointer'}
          onClick={() => setRoom('M_1fDomi')}
        >
          <path d="M 2.0 2.0 m 455.0 0.0 m 273 0 m 50 0 h 405.0 h 70 v 182.0 v 60 h -70 v 122.0 h -405.0 h -50 v -182.0 h 50 v -182.0 z" />
        </g>
        <g
          name="S_1fBath"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 455.0 0.0 m 273 0 m 455.0 0 m 70 0 h 203.0 v 242.0 v 122.0 h -203.0 h -70 v -122.0 h 70 v -60 v -182.0 z" />
        </g>
        <g
          name="S_1fLiv"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 455.0 182.0 m 0 182.0 h 420.0 v 546.0 h -420.0 v -546.0 z" />
        </g>
        <g
          name="S_1fDk"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 455.0 182.0 m 0 182.0 m 420 0 h 581.0 v 546.0 h -191.0 v -256 h -390 v -290.0 z" />
        </g>
        <g
          name="S_1fEnt"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 565.0 910.0 h 310 v -256 h 390 v 256 h 191 v 91.0 h -364 v 200 h -273 v -200 h -254 v -91.0 z" />
        </g>
        <g
          name="S_1fStr"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 975.0 654.0 h 191 v 256 h -191 v -256 z" />
        </g>
        <g
          name="S_1fToi"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 1337.0 910.0 h 120 v 91 h -120 v -91 z" />
        </g>
        <g
          name="R_1fJ"
          fill={colors.R_1fJ}
          strokeWidth={strokeWidths.R_1fJ}
          className={'cursor-pointer'}
          onClick={() => setRoom('R_1fJ')}
        >
          <path d="M 2.0 2.0 m 182.0 910.0 h 273 h 110 v 91 h -50 h 50 h 254 v 273 h -637 v -273 v -91 z" />
        </g>
        <g
          name="R_1fC"
          fill={colors.R_1fC}
          strokeWidth={strokeWidths.R_1fC}
          className={'cursor-pointer'}
          onClick={() => setRoom('R_1fC')}
        >
          <path d="M 2.0 2.0 m 1092.0 1001.0 h 364 v 273 h -364 v -273 z" />
        </g>
        <g name="R_1fL" fontSize={72} className="stroke-white fill-white">
          <text
            x="80"
            y="180"
            className={'cursor-pointer'}
            onClick={() => setRoom('R_1fL')}
          >
            {roomNames.R_1fL}
          </text>
          <text
            fontSize={38}
            x="480"
            y="160"
            className={'cursor-pointer'}
            onClick={() => setRoom('R_1fL')}
          >
            {lang === 'ja' ? 'サービスルーム' : 'DEN'}
          </text>
          <g className={'cursor-pointer'} onClick={() => setRoom('R_1fC')}>
            <text x="1150" y="1150">
              {roomNames.R_1fC}
            </text>
          </g>
          <text
            x="270"
            y="1150"
            className={'cursor-pointer'}
            onClick={() => setRoom('R_1fJ')}
          >
            {roomNames.R_1fJ}
          </text>
          <text
            fontSize={62}
            x="800"
            y="180"
            className={'cursor-pointer'}
            onClick={() => setRoom('M_1fDomi')}
          >
            {roomNames.M_1fDomi}
          </text>
        </g>
        <g fontSize={48} className="stroke-brand-dark fill-brand-dark">
          <text x="1300" y="70">
            {lang === 'ja' ? '浴室' : 'Bath'}
          </text>
          <text x="1300" y="180">
            {lang === 'ja' ? '脱衣所' : 'Changing Room'}
          </text>
          <text x="1300" y="250">
            {lang === 'ja' ? '洗面所' : 'Washroom'}
          </text>
          <text x="1320" y="320">
            W.C.
          </text>
          <text x="580" y="620">
            {lang === 'ja' ? 'リビング' : 'Living Room'}
          </text>
          <text x="960" y="560">
            {lang === 'ja' ? 'ダイニング・キッチン' : 'Dining & Kitchen'}
          </text>
          <text x="1030" y="770">
            {lang === 'ja' ? '階段' : 'Stairs'}
          </text>
          <text x="1360" y="968">
            W.C.
          </text>
          <text x="920" y="1168">
            {lang === 'ja' ? '玄関' : 'Entrance'}
          </text>
        </g>
      </g>
    </svg>
  )
}

function Floor2({
  colors,
  strokeWidths,
  setRoom,
  roomNames,
  lang,
}: FloorProps): ReactElement {
  return (
    <svg className="w-full" viewBox="148.0,0,1480.0,1280.0">
      <g className="stroke-brand-base">
        <g
          name="2F1"
          fill={colors.R_2fA}
          strokeWidth={strokeWidths.R_2fA}
          className={'cursor-pointer'}
          onClick={() => setRoom('R_2fA')}
        >
          <path d="M 2.0 2.0 m 201 330 m 273 0 h 409.5 v 273.0 h -409.5 v -273.0 z" />
        </g>
        <g
          name="2F2"
          fill={colors.R_2fB}
          strokeWidth={strokeWidths.R_2fA}
          className={'cursor-pointer'}
          onClick={() => setRoom('R_2fB')}
        >
          <path d="M 2.0 2.0 m 201 330 m 273 273 h 409.5 v 273.0 h -409.5 v -273.0 z" />
        </g>
        <g
          name="2FENT"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 201 330 m 273 0 m 410 0 m 0 170 h 91 v 153.0 h 191 v 258 v 30 h 60 v 120 h -60 h -191 h -91 z" />
        </g>
        <g
          name="STR"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 975.0 654.0 h 191 v 256 h -191 v -256 z" />
        </g>
        <g
          name="2FWRK"
          stroke="black"
          fill={colors.M_2fDomi}
          strokeWidth={strokeWidths.M_2fDomi}
          className={'cursor-pointer'}
          onClick={() => setRoom('M_2fDomi')}
        >
          <path d="M 2.0 2.0 m 201 330 m 273 0 m 410 0 h 91 h 500.5 v 546 h -309 v -223 h -191 v -153 h -91 z" />
        </g>
        <g
          name="2FLDK"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 0 546 m 224 330 h 659 v 185 h 60 h 191 v 179 h -910 z" />
        </g>
        <g
          name="2FWC"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 1134 1061 h 92 v 179 h -92 v -179 z" />
        </g>
        <g
          name="2FB"
          stroke="black"
          fill={defaultColor}
          strokeWidth={defaultWidth}
        >
          <path d="M 2.0 2.0 m 1166 876 h 60 h 182 v 364 h -182 v -179 v -120 h -60 z" />
        </g>
        <g fontSize={48}>
          <g fontSize={72} className="stroke-white fill-white">
            <text
              x="560"
              y="480"
              className={'cursor-pointer'}
              onClick={() => setRoom('R_2fA')}
            >
              {roomNames.R_2fA}
            </text>
            <text
              x="560"
              y="760"
              className={'cursor-pointer'}
              onClick={() => setRoom('R_2fB')}
            >
              {roomNames.R_2fB}
            </text>
            <text
              x="1020"
              y="550"
              className={'cursor-pointer'}
              onClick={() => setRoom('M_2fDomi')}
            >
              {roomNames.M_2fDomi}
            </text>
          </g>
          <g className="stroke-brand-dark fill-brand-dark">
            <text x="1030" y="770">
              {lang === 'ja' ? '階段' : 'Stairs'}
            </text>
            <text x="410" y="1100">
              {lang === 'ja' ? 'イベントスペース' : 'Event Space'}
            </text>
            <text x="1252" y="970">
              {lang === 'ja' ? '洗面所' : 'Washroom'}
            </text>
            <text x="1252" y="1040">
              {lang === 'ja' ? '脱衣所' : 'Changing Room'}
            </text>
            <text x="1252" y="1160">
              {lang === 'ja' ? '風呂場' : 'Bath'}
            </text>
            <text x="1140" y="1160">
              W.C.
            </text>
          </g>
        </g>
        <g className="stroke-brand-base">
          <g
            name="2FFD"
            stroke="black"
            fill={colors.F_2fDomi}
            strokeWidth={strokeWidths.F_2fDomi}
            className={'cursor-pointer'}
            onClick={() => setRoom('F_2fDomi')}
          >
            <path d="M 2.0 2.0 m 201 0 m 273 0 h 520 v 320 h -520 v -320 z" />
            <path d="M 2.0 2.0 m 201 0 m 273 0 m 520 120 h 400 v 120 h 100 v 80 h -500 v -200 z" />
            <path d="M 2.0 2.0 m 201 0 m 273 0 m 520 0 h 400 v 120 h -400 v -120 z" />
          </g>
          <g
            name="EXSTR"
            stroke="black"
            fill={defaultColor}
            strokeWidth={defaultWidth}
          >
            <path d="M 2.0 2.0 m 201 0 m 273 0 m 520 0 m 500 240 h 120 v 320 h -120 v -320 z" />
          </g>
          <g fontSize={48}>
            <g fontSize={72} className="stroke-white fill-white">
              <text
                x="580"
                y="220"
                className={'cursor-pointer'}
                onClick={() => setRoom('F_2fDomi')}
              >
                {roomNames.F_2fDomi}
              </text>
            </g>
            <g className="stroke-white fill-white">
              <text x="1040" y="80">
                {lang === 'ja' ? '風呂・トイレ' : 'Bath & Toilet'}
              </text>
              <text x="1180" y="220">
                {lang === 'ja' ? 'キッチン' : 'Kitchen'}
              </text>
              <text x="1260" y="300">
                {lang === 'ja' ? '専用玄関' : 'Entrance'}
              </text>
            </g>
            <g className="stroke-brand-dark fill-brand-dark">
              <text x="1500" y="300" transform="rotate(90,1520,320)">
                {lang === 'ja' ? '外階段' : 'Outside Stairs'}
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
