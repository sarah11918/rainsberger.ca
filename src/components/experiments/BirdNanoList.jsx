import {useStore} from '@nanostores/react'
import { birdsStore } from '../../stores/birdsStore'

export default function BirdNanoList({}) {

    const $birdsStore = useStore(birdsStore)

    return (
        <ul>
            {$birdsStore.map( (item, id) => (
                <li key={id}>{item}</li>
            ))}
        </ul>
    )
}