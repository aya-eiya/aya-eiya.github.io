import { ReactElement } from 'react'
import { Room, RoomNames, Rooms } from '../../domains/house'

const defaultColor = '#B1D0E0'
const defaultWidth = 2
const unselectedColor = '#6998AB'
const selectedColor = '#406882'
const selectedWidth = 4

const defaultGProps = {
  stroke: 'black',
  fill: defaultColor,
  strokeWidth: defaultWidth,
}

export function FloorPlan({
  selected,
  setRoom,
}: {
  selected: Room
  setRoom: (room: Room) => void
}): ReactElement {
  const colors = Rooms.reduce(
    (i, r) => ({ ...i, [r]: r === selected ? selectedColor : unselectedColor }),
    {} as Record<Room, string>
  )
  const strokeWidths = Rooms.reduce(
    (i, r) => ({ ...i, [r]: r === selected ? selectedWidth : defaultWidth }),
    {} as Record<Room, number>
  )
  return (
    <div className="grid md:grid-cols-2">
      <div className="p2">
        <Floor1 colors={colors} strokeWidths={strokeWidths} setRoom={setRoom} />
        <p className="text-center">1F</p>
      </div>
      <div className="p2">
        <Floor2 colors={colors} strokeWidths={strokeWidths} setRoom={setRoom} />
        <p className="text-center">2F</p>
      </div>
    </div>
  )
}
function Floor1({
  colors,
  strokeWidths,
  setRoom,
}: {
  colors: Record<Room, string>
  strokeWidths: Record<Room, number>
  setRoom: (room: Room) => void
}): ReactElement {
  return (
    <>
      <svg className="w-full" viewBox="0,0,1480.0,1280.0">
        <g className="stroke-brand-base">
          <g
            name="1F1"
            fill={colors.a}
            strokeWidth={strokeWidths.a}
            onClick={() => setRoom('a')}
          >
            <path d="M 2.0 2.0 h 455.0 v 273.0 h -455.0 v -273.0 z" />
            <path d="M 2.0 2.0 m 455.0 0.0 h 273.0 h 50.0 v 182.0 h -50.0 v 182.0 h -273.0 v -182.0 v -182.0 z" />
          </g>
          <g
            name="1F2"
            fill={colors.domi}
            strokeWidth={strokeWidths.domi}
            onClick={() => setRoom('domi')}
          >
            <path d="M 2.0 2.0 m 455.0 0.0 m 273 0 m 50 0 h 405.0 h 70 v 182.0 v 60 h -70 v 122.0 h -405.0 h -50 v -182.0 h 50 v -182.0 z" />
          </g>
          <g name="1FB" {...defaultGProps}>
            <path d="M 2.0 2.0 m 455.0 0.0 m 273 0 m 455.0 0 m 70 0 h 203.0 v 242.0 v 122.0 h -203.0 h -70 v -122.0 h 70 v -60 v -182.0 z" />
          </g>
          <g name="1FL" {...defaultGProps}>
            <path d="M 2.0 2.0 m 455.0 182.0 m 0 182.0 h 420.0 v 546.0 h -420.0 v -546.0 z" />
          </g>
          <g name="1FDK" {...defaultGProps}>
            <path d="M 2.0 2.0 m 455.0 182.0 m 0 182.0 m 420 0 h 581.0 v 546.0 h -191.0 v -256 h -390 v -290.0 z" />
          </g>
          <g name="1FENT" {...defaultGProps}>
            <path d="M 2.0 2.0 m 565.0 910.0 h 310 v -256 h 390 v 256 h 191 v 91.0 h -364 v 200 h -273 v -200 h -254 v -91.0 z" />
          </g>
          <g name="STR" {...defaultGProps}>
            <path d="M 2.0 2.0 m 975.0 654.0 h 191 v 256 h -191 v -256 z" />
          </g>
          <g name="1FWC" {...defaultGProps}>
            <path d="M 2.0 2.0 m 1337.0 910.0 h 120 v 91 h -120 v -91 z" />
          </g>
          <g
            name="1F3"
            fill={colors.c}
            strokeWidth={strokeWidths.c}
            onClick={() => setRoom('c')}
          >
            <path d="M 2.0 2.0 m 182.0 910.0 h 273 h 110 v 91 h -50 h 50 h 254 v 273 h -637 v -273 v -91 z" />
          </g>
          <g
            name="1F4"
            fill={colors.b}
            strokeWidth={strokeWidths.b}
            onClick={() => setRoom('b')}
          >
            <path d="M 2.0 2.0 m 1092.0 1001.0 h 364 v 273 h -364 v -273 z" />
          </g>
          <g fontSize={48}>
            <g fontSize={72} className="stroke-white fill-white">
              <text x="80" y="180" onClick={() => setRoom('a')}>
                {RoomNames.a}
              </text>
              <text fontSize={38} x="480" y="160" onClick={() => setRoom('a')}>
                サービスルーム
              </text>
              <g onClick={() => setRoom('b')}>
                <text x="1150" y="1110">
                  {RoomNames.b}
                </text>
                <text x="1140" y="1220">
                  管理人室
                </text>
              </g>
              <text x="270" y="1150" onClick={() => setRoom('c')}>
                {RoomNames.c}
              </text>
              <text x="840" y="180" onClick={() => setRoom('domi')}>
                {RoomNames.domi}
              </text>
            </g>
            <g className="stroke-brand-dark fill-brand-dark">
              <text x="1300" y="70">
                浴室
              </text>
              <text x="1300" y="180">
                脱衣所
              </text>
              <text x="1300" y="250">
                洗面所
              </text>
              <text x="1320" y="320">
                W.C.
              </text>
              <text x="580" y="620">
                リビング
              </text>
              <text x="960" y="560">
                ダイニング・キッチン
              </text>
              <text x="1030" y="770">
                階段
              </text>
              <text x="1360" y="968">
                W.C.
              </text>
              <text x="920" y="1168">
                玄関
              </text>
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}

function Floor2({
  colors,
  strokeWidths,
  setRoom,
}: {
  colors: Record<Room, string>
  strokeWidths: Record<Room, number>
  setRoom: (room: Room) => void
}): ReactElement {
  return (
    <>
      <svg className="w-full" viewBox="0,0,1480.0,1280.0">
        <g className="stroke-brand-base">
          <g
            name="2F1"
            fill={colors.d}
            strokeWidth={strokeWidths.d}
            onClick={() => setRoom('d')}
          >
            <path d="M 2.0 2.0 m 201 330 m 273 0 h 409.5 v 273.0 h -409.5 v -273.0 z" />
          </g>
          <g
            name="2F2"
            fill={colors.e}
            strokeWidth={strokeWidths.e}
            onClick={() => setRoom('e')}
          >
            <path d="M 2.0 2.0 m 201 330 m 273 273 h 409.5 v 273.0 h -409.5 v -273.0 z" />
          </g>
          <g name="2FENT" {...defaultGProps}>
            <path d="M 2.0 2.0 m 201 330 m 273 0 m 410 0 m 0 170 h 91 v 153.0 h 191 v 258 v 30 h 60 v 120 h -60 h -191 h -91 z" />
          </g>
          <g name="STR" {...defaultGProps}>
            <path d="M 2.0 2.0 m 975.0 654.0 h 191 v 256 h -191 v -256 z" />
          </g>
          <g
            name="2FWRK"
            {...defaultGProps}
            fill={colors.f}
            strokeWidth={strokeWidths.f}
            onClick={() => setRoom('f')}
          >
            <path d="M 2.0 2.0 m 201 330 m 273 0 m 410 0 h 91 h 500.5 v 546 h -309 v -223 h -191 v -153 h -91 z" />
          </g>
          <g name="2FLDK" {...defaultGProps}>
            <path d="M 2.0 2.0 m 0 546 m 224 330 h 659 v 185 h 60 h 191 v 179 h -910 z" />
          </g>
          <g name="2FWC" {...defaultGProps}>
            <path d="M 2.0 2.0 m 1134 1061 h 92 v 179 h -92 v -179 z" />
          </g>
          <g name="2FB" {...defaultGProps}>
            <path d="M 2.0 2.0 m 1166 876 h 60 h 182 v 364 h -182 v -179 v -120 h -60 z" />
          </g>
          <g fontSize={48}>
            <g fontSize={72} className="stroke-white fill-white">
              <text x="560" y="480" onClick={() => setRoom('d')}>
                {RoomNames.d}
              </text>
              <text x="560" y="760" onClick={() => setRoom('e')}>
                {RoomNames.e}
              </text>
              <text x="1020" y="550" onClick={() => setRoom('f')}>
                {RoomNames.f}
              </text>
            </g>
            <g className="stroke-brand-dark fill-brand-dark">
              <text x="1030" y="770">
                階段
              </text>
              <text x="410" y="1100" onClick={() => setRoom('e')}>
                レンタルスペース
              </text>
              <text x="1252" y="970" onClick={() => setRoom('e')}>
                洗面所
              </text>
              <text x="1252" y="1040" onClick={() => setRoom('e')}>
                脱衣所
              </text>
              <text x="1252" y="1160" onClick={() => setRoom('e')}>
                風呂場
              </text>
              <text x="1140" y="1160" onClick={() => setRoom('e')}>
                W.C.
              </text>
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}
