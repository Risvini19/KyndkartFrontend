import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function KyndKartApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // If logged in, show home screen, otherwise show login screen
  return isLoggedIn ? <HomeScreen onLogout={() => setIsLoggedIn(false)} /> : 
    <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
}

function HomeScreen({ onLogout }: { onLogout: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Logo and app name */}
        <View style={styles.logoContainer}>
          {/* Using a placeholder View instead of requiring an image that might not exist */}
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              {/* Left leaf */}
              <View style={styles.leftLeaf}></View>
              {/* Right leaf */}
              <View style={styles.rightLeaf}></View>
            </View>
          </View>
          <Text style={styles.appName}>KyndKart</Text>
          
          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        <View style={styles.loginContainer}>
          {/* Logo */}
          <View style={styles.logoPlaceholder}>
            <View style={styles.logoInner}>
              {/* Left leaf */}
              <View style={styles.leftLeaf}></View>
              {/* Right leaf */}
              <View style={styles.rightLeaf}></View>
            </View>
          </View>
          
          {/* Login Title */}
          <Text style={styles.loginTitle}>Login To Your Account</Text>
          
          {/* Email Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          {/* Password Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          
          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine} />
          </View>
          
          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account yet? </Text>
            <TouchableOpacity>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </KeyboardAvoidingView>
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
    position: 'relative',
  },
  topCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: '#E8F5F0',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  bottomCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: '#E8F5F0',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    zIndex: -1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    zIndex: 1,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  logoInner: {
    width: 80,
    height: 80,
    borderRadius: 16,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftLeaf: {
    position: 'absolute',
    left: 18,
    width: 20,
    height: 38,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '10deg' }]
  },
  rightLeaf: {
    position: 'absolute',
    right: 18,
    width: 20,
    height: 38,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    transform: [{ rotate: '-10deg' }]
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006E29',
    marginTop: 16,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006E29',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    color: '#000',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#006E29',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF5A3C',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 80,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#444',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#000',
  },
  registerLink: {
    fontSize: 16,
    color: '#006E29',
    fontWeight: 'bold',
  },
});