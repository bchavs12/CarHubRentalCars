'use client';

import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import CategoryCard from '@/components/Cards/CategoryCard';
import theme from '@/styles/theme';

const jsonData =
{
    "cars": [
        {
            "id": 1,
            "brand": "Chevrolet",
            "amount": "3",
            "description": "Um coupe Chevrolet elegante de 2020.",
            "image": "https://cdn.motor1.com/images/mgl/lEElEw/s1/chevrolet-tracker-coupe---projecao.webp",
            "category": "coupe",
            "price": 45323,
            "year": 2020
        },
        {
            "id": 2,
            "brand": "Audi",
            "amount": "3",
            "description": "Um sedan Audi luxuoso de 2019 com recursos avançados.",
            "image": "https://www.revistafullpower.com.br/wp-content/uploads/2020/04/au01.jpg",
            "category": "sedan",
            "price": 82242,
            "year": 2019
        },
        // {
        //     "id": 2,
        //     "brand": "Buick",
        //     "amount": "3",
        //     "description": "Um sedan Buick confiável de 2016.",
        //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToejXZvapFVjZQz7fbaSdSOPZ0Uzqr1ONtXXRymcTV&s",
        //     "category": "sedan",
        //     "price": 25422,
        //     "year": 2016
        // },
        {
            "id": 3,
            "brand": "Porsche",
            "amount": "3",
            "description": "Um SUV Porsche esportivo de 2018.",
            "image": "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-suv-compactchapter/normal/1589ccc4-d44a-11ed-80ff-005056bbdc38;s45/porsche-normal.jpg",
            "category": "SUV",
            "price": 77693,
            "year": 2018
        },
        {
            "id": 5,
            "brand": "Audi",
            "amount": "3",
            "description": "Um SUV Audi de 2011 com ótimo desempenho.",
            "image": "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_1600.jpg",
            "category": "SUV",
            "price": 12242,
            "year": 2011
        },
        // {
        //     "id": 6,
        //     "brand": "Chevrolet",
        //     "amount": "3",
        //     "description": "O novo coupe Chevrolet de 2023 com tecnologia avançada.",
        //     "image": "https://cdn.motor1.com/images/mgl/lEElEw/s1/chevrolet-tracker-coupe---projecao.webp",
        //     "category": "coupe",
        //     "price": 145323,
        //     "year": 2023
        // },
        // {
        //     "id": 7,
        //     "brand": "Chevrolet",
        //     "amount": "3",
        //     "description": "Um SUV Chevrolet confiável de 2003.",
        //     "image": "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/crossovers-and-suvs-subcontent/05-images/novo-tracker-cinza-satin-steel.jpg?imwidth=960",
        //     "category": "SUV",
        //     "price": 434,
        //     "year": 2003
        // },
        // {
        //     "id": 8,
        //     "brand": "Porsche",
        //     "amount": "3",
        //     "description": "O novo coupe Porsche de 2023, com design arrojado.",
        //     "image": "https://img0.icarros.com/dbimg/imgadicionalnoticia/4/43495_1",
        //     "category": "Coupe",
        //     "price": 277693,
        //     "year": 2023
        // },
        // {
        //     "id": 9,
        //     "brand": "Audi",
        //     "amount": "3",
        //     "description": "Um sedan Audi luxuoso de 2019 com recursos avançados.",
        //     "image": "https://www.revistafullpower.com.br/wp-content/uploads/2020/04/au01.jpg",
        //     "category": "sedan",
        //     "price": 82242,
        //     "year": 2019
        // },
        // {
        //     "id": 10,
        //     "brand": "Chevrolet",
        //     "amount": "3",
        //     "description": "Um coupe Chevrolet esportivo de 2020.",
        //     "image": "https://cdn.motor1.com/images/mgl/lEElEw/s1/chevrolet-tracker-coupe---projecao.webp",
        //     "category": "coupe",
        //     "price": 45323,
        //     "year": 2020
        // }
    ]
}

function MainBody() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            background: theme.palette.background.gradient,
            width: '100%',
            height: '100%',
            padding: "13px 43px"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "9px",
            }}>
                <Typography
                    sx={{
                        color: theme.palette.text.text
                    }}
                    style={theme.typography.heading}>
                    Buscar carros por categoria
                </Typography>
                <Grid container spacing={2}>
                    {jsonData.cars.map(({ id, image, brand, category, description, }) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                            <Card sx={{}}>
                                <Box sx={{
                                    height: "400px"
                                }}>
                                    <img
                                        src={image}
                                        alt={brand}
                                        style={{ width: '100%', objectFit: "cover", height: "100%" }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h6" >{brand}</Typography>
                                    <Typography variant="subtitle1">{category}</Typography>
                                    <Typography variant="body2">{description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "9px",
            }}>
                <Typography style={theme.typography.heading}>
                    Recomendações
                </Typography>
                <Grid container spacing={2}>

                </Grid>
            </Box> */}
        </Box>
    );
};

export default MainBody;

