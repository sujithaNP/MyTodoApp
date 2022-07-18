import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import todoSlice, { InitialState } from '../redux/slice/Slice'


const HomePage = () => {
    const todos = useSelector((state: InitialState) => state.tasks.todo)
    console.log('state.todo :>> ', todos);

    const dispatch = useDispatch()
    const onSubmit = () => {
        setText('')
        dispatch(
            todoSlice.actions.addTask({ text: text })
        )
    }



    const [text, setText] = useState('')

    const handleDelet = (id: number) => {
        console.log('id :>> ', { id });
        dispatch(
            // deleteTask({ id: id })
            todoSlice.actions.deleteTask({ id })
        )

    }


    return (
        <View>
            <View>
                <Text style={{ fontSize: 25, fontWeight: '700', padding: 20, textAlign: 'center' }}>Todo List</Text>
            </View>
            <View style={{ marginLeft: 20, paddingTop: 40 }}>
                <TextInput style={styles.input}
                    placeholder='Add Todo'
                    value={text}
                    onChangeText={setText}
                />
                <TouchableOpacity onPress={() => {
                    onSubmit()
                }} style={styles.button}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Add</Text>
                </TouchableOpacity>


            </View>
            <View style={{ paddingLeft: 10 }}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => <View style={styles.box}>
                        <Text style={styles.title}>{item.text}</Text>
                        <TouchableOpacity onPress={() => {
                            handleDelet(item.id)
                            console.log('item.id', item.id)
                            console.log('todos', todos)
                        }}>
                            <Text style={styles.delete}>X</Text>

                        </TouchableOpacity>

                    </View>}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        margin: 10,
        padding: 10

    },
    button: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        margin: 10,
        padding: 10,
        backgroundColor: 'gray'

    },
    title: {
        fontSize: 18

    },
    delete: {
        color: 'red',
        fontSize: 20,
        fontWeight: '700'
    },
    box: {
        backgroundColor: '#e9e9e9',
        padding: 20,
        marginHorizontal: 18,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10



    }
})