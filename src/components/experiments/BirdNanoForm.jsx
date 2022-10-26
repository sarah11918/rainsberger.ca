import {useStore} from '@nanostores/react'
import { useRef } from 'react'
import { birdsStore } from '../../stores/birdsStore'

export default function BirdNanoForm({}) {

    const $birdsStore = useStore(birdsStore)
    const birdRef = useRef("")

    function saveItem(event) {
        event.preventDefault()
        birdsStore.set([...$birdsStore, birdRef.current.value])
        birdRef.current.value=""
        birdRef.current.focus()
    }

    return (
        <>
            <label>Enter a bird: </label>
            <input type="text" ref={birdRef}></input>
            <button onClick={saveItem}>Send</button>
        </>
    )
}