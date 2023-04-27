import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { TypedArray } from "../components/types/index";
import { Mesh } from "three";

// Credits @pmndrs/maath https://github.com/pmndrs/maath
type Sphere = {
  radius: number;
};

const defaultSphere = {
  radius: 1,
  center: [0, 0, 0],
};

// Credits @kchapelier https://github.com/kchapelier/wavefunctioncollapse/blob/master/example/lcg.js#L22-L30
function normalizeSeed(seed: number | string) {
  if (typeof seed === "number") {
    seed = Math.abs(seed);
  } else if (typeof seed === "string") {
    const string = seed;
    seed = 0;

    for (let i = 0; i < string.length; i++) {
      seed = (seed + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
    }
  }

  if (seed === 0) {
    seed = 311;
  }

  return seed;
}

function lcgRandom(seed: number | string) {
  let state = normalizeSeed(seed);

  return function() {
    const result = (state * 48271) % 2147483647;
    state = result;
    return result / 2147483647;
  };
}
export class Generator {
  seed: string | number = 0;

  constructor(seed: string | number) {
    this.init(seed);
  }

  init = (seed: number | string) => {
    this.seed = seed;
    this.value = lcgRandom(seed);
  };

  value = lcgRandom(this.seed);
}

const defaultGen = new Generator(Math.random());

export function inSphere(
  buffer: TypedArray,
  sphere: Sphere,
  rng: Generator = defaultGen
) {
  const { radius } = {
    ...defaultSphere,
    ...sphere,
  };
  for (let i = 0; i < buffer.length; i += 3) {
    const u = Math.pow(rng.value(), 1 / 3);

    let x = rng.value() * 2 - 1;
    let y = rng.value() * 2 - 1;
    let z = rng.value() * 2 - 1;

    const mag = Math.sqrt(x * x + y * y + z * z);

    x = (u * x) / mag;
    y = (u * y) / mag;
    z = (u * z) / mag;

    buffer[i] = x * radius;
    buffer[i + 1] = y * radius;
    buffer[i + 2] = z * radius;
  }

  return buffer;
}

const randomColor = (): string | undefined => {
  const colors = ["#ffffff", "#073642", "#a5b4fc", "#38bdf8", "#fbbf24"];
  return colors[Math.ceil(Math.random() * colors.length)];
};

const Stars = (props: any) => {
  const [color, set_color] = useState("");

  useEffect(() => {
    const curr_color = randomColor();
    if (curr_color != undefined) {
      set_color(curr_color);
    }
  }, []);

  const ref = useRef<Mesh>(null!);
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((_, delta) => {
    if (ref.current != undefined) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color={color}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
