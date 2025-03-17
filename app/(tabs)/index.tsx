import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';

// Main Authentication Component
function AuthScreens() {
  // State for screen navigation
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register'>('login');
  
  // Navigation functions
  const navigateToRegister = () => setCurrentScreen('register');
  const navigateToLogin = () => setCurrentScreen('login');
  const handleForgotPassword = () => console.log('Forgot password');
  
  // Render based on current screen
  return (
    <>
      {currentScreen === 'login' ? (
        <LoginScreen 
          onNavigateToRegister={navigateToRegister}
          onNavigateToForgotPassword={handleForgotPassword}
        />
      ) : (
        <RegistrationScreen 
          onNavigateToLogin={navigateToLogin}
        />
      )}
    </>
  );
}

// Interface for Login Screen Props
interface LoginScreenProps {
  onNavigateToRegister: () => void;
  onNavigateToForgotPassword: () => void;
}

// Login Screen Component
function LoginScreen({ onNavigateToRegister, onNavigateToForgotPassword }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    console.log('Login with:', username, password);
    // Implement your login logic here
  };
  
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
        
        {/* Login Text */}
        <Text style={styles.loginTitle}>Login To Your Account</Text>
        
        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={username}
            onChangeText={setUsername}
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
          
          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotContainer} onPress={onNavigateToForgotPassword}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          
          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.divider} />
          </View>
          
          {/* Create Account Link */}
          <View style={styles.createAccountContainer}>
            <Text style={styles.noAccountText}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={onNavigateToRegister}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Interface for Registration Screen Props
interface RegistrationScreenProps {
  onNavigateToLogin: () => void;
}

// Registration Screen Component
function RegistrationScreen({ onNavigateToLogin }: RegistrationScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleRegister = () => {
    console.log('Register with:', name, email, password, confirmPassword);
    // Implement your registration logic here
  };
  
  const handleNavigateToHome = () => console.log('Navigate to home');
  const handleNavigateToExplore = () => console.log('Navigate to explore');
  
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
        <Text style={styles.loginTitle}>Create New Account</Text>
        
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
          <TouchableOpacity style={styles.signInButton} onPress={handleRegister}>
            <Text style={styles.signInButtonText}>Next</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.divider} />
          </View>
          
          {/* Back to Login Link */}
          <View style={styles.createAccountContainer}>
            <Text style={styles.noAccountText}>Already have an account? </Text>
            <TouchableOpacity onPress={onNavigateToLogin}>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>
          </View>
          
          {/* Navigation Buttons */}
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.navButton} onPress={handleNavigateToHome}>
              <View style={styles.homeIcon} />
              <Text style={styles.navButtonText}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.navButton} onPress={handleNavigateToExplore}>
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
  loginTitle: {
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
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotText: {
    color: '#008E33',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#008E33',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  signInButtonText: {
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
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  noAccountText: {
    color: '#666666',
    fontSize: 14,
  },
  registerText: {
    color: '#008E33',
    fontWeight: 'bold',
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

export default AuthScreens;