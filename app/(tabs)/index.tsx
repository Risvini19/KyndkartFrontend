import React from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Text, Image } from 'react-native';

interface RegistrationScreenProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  onRegister: () => void;
  onNavigateToHome: () => void;
  onNavigateToExplore: () => void;
}

function RegistrationScreen({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onRegister,
  onNavigateToHome,
  onNavigateToExplore
}: RegistrationScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Background light green curve */}
        <View style={styles.backgroundCurve} />
        
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <View style={styles.logoCircle}>
              <View style={styles.logoLeaf} />
              <View style={styles.logoFork} />
              <View style={styles.logoArrow} />
            </View>
          </View>
        </View>
        
        {/* Create Account Text */}
        <Text style={styles.createAccountTitle}>Create New Account</Text>
        
        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Name Input */}
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          
          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          
          {/* Password Input */}
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          {/* Confirm Password Input */}
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          
          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton} onPress={onRegister}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.divider} />
          </View>
          
          {/* Navigation Buttons */}
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.navButton} onPress={onNavigateToHome}>
              <View style={styles.homeIcon} />
              <Text style={styles.navButtonText}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.navButton} onPress={onNavigateToExplore}>
              <View style={styles.exploreIcon} />
              <Text style={styles.navButtonText}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
    position: 'relative',
  },
  backgroundCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F2F9F5',
    borderBottomRightRadius: 500,
    zIndex: -1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 16,
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#008E33',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoLeaf: {
    position: 'absolute',
    left: 8,
    width: 12,
    height: 24,
    backgroundColor: '#008E33',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  logoFork: {
    position: 'absolute',
    width: 4,
    height: 24,
    backgroundColor: '#008E33',
    left: 26,
  },
  logoArrow: {
    position: 'absolute',
    right: 8,
    width: 12,
    height: 24,
    backgroundColor: '#008E33',
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  createAccountTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008E33',
    textAlign: 'center',
    marginBottom: 32,
  },
  formContainer: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#008E33',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDDDDD',
  },
  dividerText: {
    paddingHorizontal: 16,
    color: '#666666',
    fontSize: 14,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  navButton: {
    alignItems: 'center',
  },
  homeIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#008E33',
    borderRadius: 4,
    marginBottom: 4,
  },
  exploreIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 24,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#666666',
    marginBottom: 4,
  },
  navButtonText: {
    color: '#666666',
    fontSize: 14,
  },
});

export default RegistrationScreen;