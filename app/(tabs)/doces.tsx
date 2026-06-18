import { useState } from 'react'
import { FlatList, StyleSheet, View, Image, TextInput } from 'react-native'
import { router } from 'expo-router'
import HomeCard from '../../components/card-component'
import CustomInput from '../../components/custom-input-component'
import receitas from '../../receitas.json'

function Doces() {
    const [pesquisa, setPesquisa] = useState('')
    const doces = receitas.filter(r => r.categoria === 1);
    const receitasOrdenadas = [...doces].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
    const receitasFiltradas = receitasOrdenadas.filter(receita => receita.nome.toLowerCase().includes(pesquisa.toLowerCase()))

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logoVovo.png')} style={styles.logo} />

            <CustomInput placeholder="Pesquisar receita..." value={pesquisa} onChangeText={setPesquisa} />

            <FlatList
                data={receitasFiltradas}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.lista}
                renderItem={({ item }) => (
                    <HomeCard title={item.nome} route={`/receita/${item.id}`} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container:
    {
        marginBottom: 230,
    },

    lista: {
        padding: 16,
    },

    row: {
        justifyContent: 'space-between',
        marginBottom: 12,
    },

    logo:
    {
        width: 220,
        height: 120,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 40,
        marginBottom: 20,
    },
})

export default Doces;