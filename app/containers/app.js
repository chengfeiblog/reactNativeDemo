'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Navigator,
    Text,
    BackAndroid,
    Platform
        } from 'react-native';
        
 import Tabbar from './tabbar';     
 var styles = StyleSheet.create({
     nivagationBar: {
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#c3c3c3'
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 64 : 56
    },
    navBarTitleView: {
        flex: 1,
        justifyContent: 'center'
    },
    navBarTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#333'
    },
    navBarLeftButton: {
        flex: 1,
        justifyContent: 'center'
    },
    navBarRightButton: {
        flex: 1,
        justifyContent: 'center'
    }
     
 });
 const REF_NAV = 'ref_navigator';
 /**
  * 默认页面
  */
 const defaultRoute = {
    title: '', 
    component: Tabbar
 };
 export default class App extends Component{
     componentDidMount() {
         if(Platform.OS === 'android') {
             BackAndroid.addEventListener('hardwareBackPress', () => {
                  let nav = this.refs[REF_NAV];
                  //getCurrentRoutes获取当前栈里的路由，也就是push进来，没有pop掉的那些
                  if(nav && nav.getCurrentRoutes().length > 1) {
                      nav.pop();
                  } else {
                      return true;
                  }
                  return true;
             });
         }
     }
     /**
      * 
      */
     _renderScene(route, navigator) {
         let Compnent = route.component;
        return (
            <View style={styles.container}>
                <Compnent
                    navigator={navigator}
                    route={route}
                    {...route.passProps}
                    {...this.props}
                />
            </View>
        );
     }
     /**
      *设置导航栏的属性 
       */
     _routeMapper = {
        Title: function (route, nav, index, navState) {
            if (route.title === null || route.title === undefined) {
                return null;
            }
            return (
                <View style={styles.navBarTitleView}>
                    <Text style={styles.navBarTitle}>{route.title}</Text>
                </View>
            );
        },
        LeftButton: function (route, nav, index, navState) {
            if (index > 0 && (route.leftButton === null || route.leftButton === undefined)) {
                return (
                    <NavigationBarItem title='返回' onPress={()=>{nav.pop()}}/>
                );
            }
            return (
                <View style={styles.navBarLeftButton}>
                    {route.leftButton}
                </View>
            );
        },
        RightButton: function (route, nav, index, navState) {
            return (
                <View style={styles.navBarRightButton}>
                    {route.rightButton}
                </View>
            );
        }
    };
     render() {
         return (
           <Navigator
                ref={REF_NAV}  //获得节点
                initialRoute={defaultRoute} //默认页面
                renderScene={(route, nav) => this._renderScene(route, nav) } //路由设置
                navigationBar= {                                            //路由后的导航栏
                    <Navigator.NavigationBar
                        routeMapper={this._routeMapper}
                        style={styles.nivagationBar}
                     />
                }
           ></Navigator>  
         );
     }
 }       