import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';

function PostEditor() {
    return (
        <>
            <Box width = "50%" height = "100%" padding = {2} borderRight = "3px solid black" > 

                <Box {...getRootProps()} mb = {1}>
                    <input {...getInputProps()} />
                    <Button> Carregar Imagens </Button>
                </Box>
                            
                {image && 
                    <Box mb = {2}>
                        <img className = {classes.image} src = {image} alt = "background" />
                    </Box>
                }

                <Box mb = {2}>
                    <TextField id = "Title" placeholder = "Titulo" variant="standard" fullWidth value = {Title} onChange = {handleTitleChange} />
                </Box>
                            
                <Box mb = {2}>
                    <Autocomplete 
                        multiple
                        id = "tags-standard"
                        options = {arrayTags}
                        getOptionLabel = {(option) => option.title}
                        value = {Tags}
                        onChange = {handleTagsChange}
                        renderInput = {(params) => (
                        <TextField
                            {...params}
                            variant = "standard"
                            placeholder = "tags"
                        />
                    )}
                    /> 
                </Box>

                <textarea onChange = {handleChangeMarkDown} className = {classes.textarea}> editor </textarea>
            </Box>      
        </>
    )
}

export default PostEditor;