import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useMotionValue, useSpring } from 'motion/react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Props {
    scale?: number
    position?: [x: number, y: number, z: number]
}

export default function Astronaut({ scale = 0.3, position = [1.3, -1, 0] }: Props) {
    const group = useRef<THREE.Group>(null)
    const { nodes, materials, animations } = useGLTF('/models/tenhun_falling_spaceman_fanart.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        if (animations.length > 0) {
            actions[animations[0].name]?.play()
        }
    }, [actions, animations])

    const yPosition = useMotionValue(5)
    const ySpring = useSpring(yPosition, { damping: 30 })

    useEffect(() => {
        ySpring.set(-1)
    }, [ySpring])

    useFrame(() => {
        if (group.current) {
            group.current.position.y = ySpring.get()
        }
    })

    return (
        <group
            ref={group}
            dispose={null}
            rotation={[-Math.PI / 2, -0.2, 2.2]}
            scale={scale}
            position={position}
        >
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model">
                    <group name="Root">
                        <group name="metarig">
                            <primitive object={nodes.metarig_rootJoint} />
                            {[
                                'Cube001_0',
                                'Cube005_0',
                                'Cube002_0',
                                'Plane_0',
                                'Cube008_0',
                                'Cube004_0',
                                'Cube003_0',
                                'Cube_0',
                                'Cube009_0',
                                'Cube011_0',
                            ].map((name) => (
                                <skinnedMesh
                                    key={name}
                                    name={name}
                                    geometry={nodes[name].geometry}
                                    material={materials['AstronautFallingTexture.png']}
                                    skeleton={nodes[name].skeleton}
                                />
                            ))}
                            <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/tenhun_falling_spaceman_fanart.glb')
