//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
//Write your code here
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'



const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data,setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/get")
        .then((res) => {
            setdata(res.data);
        },[])
    })

    const delData = (id) => {
        axios.delete("http://localhost:3001/delete/" + id)
        .then((res) => {
            alert(res.data.message)
            window.location.reload()
        })
    }

    const updateData = (val) => {
        navigate("/add", {state: {val}})
    }
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Grid container spacing = {2} justifyContent="center">
            {data.map((val) => (
                <Grid item xs = {3} key = {val.id}>
                    <Card>
                        <CardMedia
                            component = "img"
                            height="240"
                            image = {val.img_url}>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1">
                              {val.title} <br />
                            </Typography>
                            <Typography gutterBottom variant="h5">
                              {val.content} <br />
                            </Typography>
                            <Button color='secondary' variant='contained' onClick={() => delData(val._id)}>Delete</Button>&nbsp;&nbsp;&nbsp;
                            <Button color='secondary' variant='contained' onClick={() => updateData(val)}>Update</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Home
























