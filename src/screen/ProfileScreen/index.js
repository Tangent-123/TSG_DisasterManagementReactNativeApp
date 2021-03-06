import React, { Component } from 'react';
import { ScrollView, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker';
import BaseUrl from '../../Util/ApiCollection';
import LevelStore from '../../Componenet/ReactString';
import StatusBar from '../../Assets/StatusBar';
import StoreHeader from '../../Header';
import RadioForm from 'react-native-simple-radio-button';
import Axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import qs from 'qs';
import ProfileStyle from './style';
import Constants from '../../Util/Config/Constants';

var radio_props = [
    { label: 'Male', value: '0', },
    { label: 'Female', value: '1' }
];
var initvalue=0;
export default class ProfileScreen extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            City: '',
            Mobile: '',
            email: '',
            ContactMessage: '',
            spinner: false,
            showAlert: false,
            Companyname: '',
            firstName: '',
            MiddleName: '',
            LastNAme: '',
            EmergencyName: '',
            EmergencyConatct: '',
            bloodgroup: '',
            USER_ID: '',
            SYSTEM_ROLE_ID: '',
            SYSTEM_ROLE_CODE: '',
            Sex: '',
            ValueSex:0,
            AccessToken: '',
            EmergencyName: '',
            EmergencyNumber: '',
           // initvalue:0,
        }

        this.loaddata();
    }
    loaddata=async()=> {
        let token= await AsyncStorage.getItem(Constants.access_token)
        let responsecode = await AsyncStorage.getItem(Constants.responseCode)
        let fname = await AsyncStorage.getItem(Constants.firstname)
        let gender = await  AsyncStorage.getItem(Constants.gender)
        let emergencyname =  await AsyncStorage.getItem(Constants.emergencyname)
        let emergencynumber =  await AsyncStorage.getItem(Constants.emergencynumber)
        let mobilenumber =  await AsyncStorage.getItem(Constants.mobilenumber)
        let userID =  await AsyncStorage.getItem(Constants.user_id)
        this.setState({AccessToken: token,USER_ID: userID,firstName: fname,Sex: gender,
        EmergencyName: emergencyname,EmergencyNumber: emergencynumber,Mobile: mobilenumber});
                                                        
console.log('fffffffffffffff'+(token))
    }
    componentdidMount(){
         if(this.state.Sex == 'Male'){
                                                                       Toast.show(this.state.Sex)
         initvalue=0;
                  }else if(this.state.Sex == 'Female'){
                       //Toast.show(this.state.Sex)
                    initvalue=1;
                   // initvalue=1;
                       }
    }
    getUpdateData() {
        this.setState({
            spinner:true
        })
        AsyncStorage.setItem(Constants.gender, this.state.Sex);
        AsyncStorage.setItem(Constants.emergencyname, this.state.EmergencyName);
        AsyncStorage.setItem(Constants.emergencynumber, this.state.EmergencyNumber);
        AsyncStorage.setItem(Constants.mobilenumber, this.state.Mobile);
        if (this.state.Mobile !== '') {
            if (this.state.EmergencyName !== '') {
                if (this.state.EmergencyNumber !== '') {
                    const data = JSON.stringify({
                        ACTION: "PROFILE",
                        GENDER: this.state.Sex,
                        MOBILE_NO: this.state.Mobile,
                        USER_ID: this.state.USER_ID,
                        EMERGENCY_CONTACT: this.state.EmergencyNumber,
                        EMERGENCY_NAME: this.state.EmergencyName,

                    });
                    console.log('rohit jain' + data)
                    const headers = {
                        'content-type': 'application/json',
                        'Authorization': 'bearer ' + this.state.AccessToken
                    };
                    Axios.post(BaseUrl.UpdateUser,
                        data,
                        { headers }
                    ).then(p => {
                        console.log('jjjjjjjjjjjjjj'+JSON.stringify(p.data.status))
                        if (p.data.status == 'true') {
                            Toast.show(p.data.response);
                            this.props.navigation.navigate('DashboardStack');
                            this.setState({
                                spinner: false,
                            });

                        } else {
                            Toast.show(p.data.response);
                            this.setState({
                                spinner: false,
                            });
                        }

                    }).catch(function (error) {
                        console.log('tttttttttttt'+error)

                    })
                } else {
                    Toast.show('Please Enter Emergency Contact')
                }
            } else {
                Toast.show('Please Enter Emergency Name')
            }
        } else {
            Toast.show('Please Enter Mobile Number')
        }
    }
    getback = () => {
        this.props.navigation.navigate('DashboardScreen')
    }
    getRedio(value) {
        console.log('rohit' + value)
        if (value == '0') {
            initvalue=0;
            this.setState({
                Sex: 'Male',
               // initvalue:0,
            });
        } else if (value == '1') {
            initvalue=1;
            this.setState({
                Sex: 'Female',
               // initvalue:1,
            });
        }

    }
    render() {                 
        return (
            <View style={ProfileStyle.container}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={RegStyle.spinnerTextStyle}
                />
               
                <StoreHeader title={LevelStore.Profile} onPress = {this.getback}/>
                <ScrollView style={{ flex: 1 }}>
                    <View style={ProfileStyle.containersecond}>
                        <Text style={{ color: 'red', fontSize: 12, marginBottom: 10, fontWeight: '700' }}>* All fields are mandatory</Text>
                        <Text style={{ color: '#3386FF', fontSize: 16, fontWeight: '700' }}>Name</Text>
                        <TextInput
                            style={{ color: '#000', fontSize: 16 }}
                            placeholder="First Name"
                            editable={false}
                            onChangeText={(firstName) => this.setState({ firstName })}
                            value={this.state.firstName}
                        />
                        <View style={{ height: .8, backgroundColor: '#000', width: '99%' }} />

                        <Text style={{ color: '#3386FF', fontSize: 16, marginTop: 10, fontWeight: '700' }}>Mobile Number</Text>
                        <TextInput
                            style={{ color: '#000', fontSize: 16 }}
                            placeholder="Mobile Number"
                            editable={true}
                            maxLength={11}
                            keyboardType={'numeric'}
                            onChangeText={(Mobile) => this.setState({ Mobile })}
                            value={this.state.Mobile}
                        />
                        <View style={{ height: 1, backgroundColor: '#000', width: '99%' }} />
                        <Text style={{ color: '#3386FF', fontSize: 16, marginTop: 10, fontWeight: '700' }}>Gender</Text>
                        <View style={{ marginTop: 12 }}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={initvalue}
                                buttonSize={10}
                                selectedButtonColor={'#70AFA7'}
                                buttonColor={'#dddedb'}
                                labelStyle={{ fontSize: 18, marginRight: 20, color: '#001630', fontFamily: "Gilroy-Medium", alignItems: 'center', marginRight: 48 }}
                                formHorizontal={true}
                                animation={true}
                                onPress={(Value) => { this.getRedio(Value) }}>
                            </RadioForm>
                        </View>
                        <Text style={{ color: '#3386FF', fontSize: 16, marginTop: 10, fontWeight: '700' }}>Emergency Contact Person Name</Text>

                        <TextInput
                            style={{ color: '#000', fontSize: 16 }}
                            placeholder="Emergency Name"
                            editable={true}
                            onChangeText={(EmergencyName) => this.setState({ EmergencyName })}
                            value={this.state.EmergencyName}
                        />
                        <View style={{ height: 1, backgroundColor: '#000', width: '99%', marginBottom: 10 }} />
                        <Text style={{ color: '#3386FF', fontSize: 16, marginTop: 10, fontWeight: '700' }}>Emergency Contact Person Number</Text>

                        <TextInput
                            style={{ color: '#000', fontSize: 16 }}
                            placeholder="Emergency Number"
                            editable={true}
                            maxLength={11}
                            keyboardType={'numeric'}
                            onChangeText={(EmergencyNumber) => this.setState({ EmergencyNumber })}
                            value={this.state.EmergencyNumber}
                        />
                        <View style={{ height: 1, backgroundColor: '#000', width: '99%', marginBottom: 10 }} />

                    </View>

                    <View style={ProfileStyle.container2}>
                        <TouchableOpacity
                            style={ProfileStyle.AddToCardBtn}
                            onPress={() => this.getUpdateData()}>
                            <Text style={RegStyle.TextStyle}>UPDATE PROFILE </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
               <StatusBar/>
            </View>
        );
    }
}




