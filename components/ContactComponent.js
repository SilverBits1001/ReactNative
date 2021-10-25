import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import * as MailComposer from 'expo-mail-composer'

export default class ContactComponent extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>

                    <Card
                        title='Contact Information'
                        wrappertStyle={{ margin: 20 }}>
                        <Text>1 Nucamp Way</Text>
                        <Text>Seattle, WA 98001</Text>
                        <Text style={{ marginBottom: 10 }}>U.S.A </Text>
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                        <Button
                            title='Send Email'
                            buttonStyle={{backgroundColor: '#5637dd', margin:40}}
                            icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{margin:10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView >
        )
    }
}
