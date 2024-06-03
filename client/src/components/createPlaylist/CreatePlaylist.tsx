import { useState } from "react"
import { createPlaylistProp } from "../../utils/types"
import "./createPlaylist.css"

const dummy = [
    'playlist1',
    'playlist2',
    'playlist3',
    'playlist4',
    'playlist5',
    'playlist6',
]

const CreatePlaylist: React.FC<createPlaylistProp> = ({ setIsOpen }) => {

    const [existing, setExisting] = useState<boolean>(false);
    const [create, setCreate] = useState<boolean>(false);

    const handleExisting = ()=> {
        setExisting(!existing);
        setCreate(false);
    }

    const handleCreate = ()=> {
        setCreate(!create);
        setExisting(false);
    }

    return (
        <div className="createPlaylist">
            <div className="createPlaylistWrapper">
                <span className="createPlaylistClose" onClick={() => setIsOpen(false)}>X</span>
                <h1 className="createPlaylistTitle">Add or create new Playlist</h1>
                <div className="createPlaylistbtns">
                    <button className="createPlaylistAdd" onClick={handleExisting}>Add to Existing</button>
                    <button className="createPlaylistAdd" onClick={handleCreate}>Create New Playlist</button>
                </div>
                <div className="createPlaylistDynamic">
                    {
                        existing ?
                            <div className="createPlaylistExisting">
                                {
                                    dummy.map((ele, id) => (
                                        <span className="createPlaylistExistingSpan" key={id}>{ele}</span>
                                    ))
                                }
                            </div> : <span></span>
                    }
                    {
                        create ?
                            <div className="createPlaylistNew">
                                <h2>Playlist Name</h2>
                                <input className="createPlaylistNewText" type="text" placeholder="Name..." />
                                <label className="createPlaylistNewLable">Public or Private?</label>
                                <div className="createPlaylistNewDiv">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label>Public</label>
                                    <input type="radio" id="css" name="fav_language" value="CSS" />
                                    <label >Private</label>
                                </div>
                            </div> : <span></span>
                    }

                    <button className="createPlaylistSubmit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePlaylist