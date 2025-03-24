import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Beautiful Logo Component
function AppLogo() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoBackground}>
        <Text style={styles.logoText}>🍽️</Text>
      </View>
    </View>
  );
}

// Welcome Screen Component
function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* App Name */}
      <View style={styles.headerSection}>
        <AppLogo />
        <Text style={styles.welcomeText}>KyndKart</Text>
      </View>

      {/* Welcome Message */}
      <View style={styles.contentSection}>
        <Text style={styles.descriptionText}>
          "Join us in making a difference by connecting with NGOs and supporting meaningful causes. 
          Whether you're donating essentials or lending a helping hand, every contribution counts.
          Let’s get started—create your account today and be a part of the change!"
        </Text>
      </View>

      {/* Next Button at Bottom */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Login Screen Component
type LoginScreenProps = {
  onLogin: (email: string) => void;
  onGoToRegister: () => void;
  onForgotPassword: () => void;
};

function LoginScreen({ onLogin, onGoToRegister, onForgotPassword }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      onLogin(email);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
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
          <TouchableOpacity style={styles.forgotPassword} onPress={onForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
          <TouchableOpacity onPress={onGoToRegister}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Registration Screen Component
type RegisterScreenProps = {
  onRegister: () => void;
  onGoToLogin: () => void;
};

function RegisterScreen({ onRegister, onGoToLogin }: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && password === confirmPassword) {
      onRegister();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* Register Title */}
        <Text style={styles.loginTitle}>Create New Account</Text>

        {/* Name Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
        </View>

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
        </View>

        {/* Confirm Password Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Login Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already have an account? </Text>
          <TouchableOpacity onPress={onGoToLogin}>
            <Text style={styles.registerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Forgot Password Screen Component
type ForgotPasswordScreenProps = {
  onSendOtp: (emailOrPhone: string) => void;
  onGoBack: () => void;
};

function ForgotPasswordScreen({ onSendOtp, onGoBack }: ForgotPasswordScreenProps) {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleSendOtp = () => {
    if (emailOrPhone.trim() !== '') {
      onSendOtp(emailOrPhone);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* Forgot Password Title */}
        <Text style={styles.loginTitle}>Forgot Password?</Text>

        {/* Email or Phone Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Enter Your Mobile Number or Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email or Phone"
            placeholderTextColor="#999"
            value={emailOrPhone}
            onChangeText={setEmailOrPhone}
          />
        </View>

        {/* Send OTP Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleSendOtp}>
          <Text style={styles.loginButtonText}>Send OTP</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// OTP Verification Screen Component
type OtpVerificationScreenProps = {
  email: string;
  onVerify: () => void;
  onResend: () => void;
  onGoBack: () => void;
};

function OtpVerificationScreen({ email, onVerify, onResend, onGoBack }: OtpVerificationScreenProps) {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (otp.trim() !== '') {
      onVerify();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(20);
      onResend();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* OTP Verification Title */}
        <Text style={styles.loginTitle}>OTP Verification</Text>

        {/* OTP Instructions */}
        <Text style={styles.otpInstructions}>
          Enter 4 digit code sent to your E-mail {email}
        </Text>

        {/* OTP Field */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
        </View>

        {/* Resend OTP Link */}
        <TouchableOpacity style={styles.resendOtp} onPress={handleResend} disabled={timer > 0}>
          <Text style={styles.resendOtpText}>
            {timer > 0 ? `Resend code in ${timer}sec` : "Didn’t receive a code? Resend."}
          </Text>
        </TouchableOpacity>

        {/* Verify Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleVerify}>
          <Text style={styles.loginButtonText}>Verify</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Reset Password Screen Component
type ResetPasswordScreenProps = {
  onResetPassword: (newPassword: string, confirmPassword: string) => void;
  onGoBack: () => void;
};

function ResetPasswordScreen({ onResetPassword, onGoBack }: ResetPasswordScreenProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (newPassword.trim() !== '' && confirmPassword.trim() !== '' && newPassword === confirmPassword) {
      onResetPassword(newPassword, confirmPassword);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* Reset Password Title */}
        <Text style={styles.loginTitle}>Reset Your Password</Text>

        {/* New Password Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Enter New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        {/* Confirm Password Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Enter Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleResetPassword}>
          <Text style={styles.loginButtonText}>Confirm</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// HomeScreen Component
type HomeScreenProps = {
  onLogout: () => void;
  onSettingsPress: () => void;
  onActivityPress: () => void;
  onAccountPress: () => void;
  onRegisterPress: () => void;
  donorDetailsList: any[];
  receiverDetailsList: any[]; // Added receiver details list
  onViewMoreDonorsPress: () => void;
  onViewMoreReceiversPress: () => void; // Added view more for receivers
};

function HomeScreen({
  onLogout,
  onSettingsPress,
  onActivityPress,
  onAccountPress,
  onRegisterPress,
  donorDetailsList,
  receiverDetailsList,
  onViewMoreDonorsPress,
  onViewMoreReceiversPress,
}: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <AppLogo />
          <Text style={styles.welcomeText}>Welcome to KyndKart</Text>
        </View>

        {/* Donors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Donors</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Recent Donors</Text>
            <TouchableOpacity style={styles.viewMoreButton} onPress={onViewMoreDonorsPress}>
              <Text style={styles.viewMoreButtonText}>View More {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Receivers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receivers</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Recent Receivers</Text>
            <TouchableOpacity style={styles.viewMoreButton} onPress={onViewMoreReceiversPress}>
              <Text style={styles.viewMoreButtonText}>View More {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={onSettingsPress}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={onActivityPress}>
          <Text style={styles.navButtonText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={onAccountPress}>
          <Text style={styles.navButtonText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={onRegisterPress}>
          <Text style={styles.navButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Register Component
type RegisterProps = {
  onGoBack: () => void;
  onDonorRegister: (donorDetails: any) => void;
  onReceiverRegister: (receiverDetails: any) => void; // Added receiver registration handler
};

function Register({ onGoBack, onDonorRegister, onReceiverRegister }: RegisterProps) {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [showReceiverForm, setShowReceiverForm] = useState(false);
  const [receiverLocation, setReceiverLocation] = useState('');
  const [receiverPhoneNumber, setReceiverPhone] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [showDonorForm, setShowDonorForm] = useState(false);
  const [operatingHours, setOperatingHours] = useState('');

  const handleDonorRegister = () => {
    if (donorName.trim() !== '' && donorEmail.trim() !== '') {
      const donorDetails = {
        shopName: donorName,
        registrationNumber: registrationNumber,
        openingHours: operatingHours,
      };
      onDonorRegister(donorDetails);
      setShowDonorForm(false);
    }
  };

  const handleReceiverRegister = () => {
    if (
      receiverName.trim() !== '' &&
      receiverEmail.trim() !== '' &&
      receiverPhoneNumber.trim() !== '' &&
      receiverLocation.trim() !== '' &&
      organizationType.trim() !== '' &&
      registrationNumber.trim() !== '' &&
      operatingHours.trim() !== ''
    ) {
      const receiverDetails = {
        ngoName: receiverName,
        email: receiverEmail,
        phone: receiverPhoneNumber,
        location: receiverLocation,
        type: organizationType,
        registrationNumber: registrationNumber,
        operatingHours: operatingHours,
      };
      onReceiverRegister(receiverDetails);
      setShowReceiverForm(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* Register Title */}
        <Text style={styles.loginTitle}>Register</Text>

        {/* Donor Registration Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Donor Registration</Text>
          <View style={styles.card}>
            {!showDonorForm ? (
              <TouchableOpacity style={styles.loginButton} onPress={() => setShowDonorForm(true)}>
                <Text style={styles.loginButtonText}>Register as Donor</Text>
              </TouchableOpacity>
            ) : (
              <>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Business Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Business/Organization Name"
                    placeholderTextColor="#999"
                    value={donorName}
                    onChangeText={setDonorName}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    value={donorEmail}
                    onChangeText={setDonorEmail}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Phone Number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    value={receiverPhoneNumber}
                    onChangeText={setReceiverPhone}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Location</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Location"
                    placeholderTextColor="#999"
                    value={receiverLocation}
                    onChangeText={setReceiverLocation}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Organization Type</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Business/Organization Type"
                    placeholderTextColor="#999"
                    value={organizationType}
                    onChangeText={setOrganizationType}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Operating Hours</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Operating Hours"
                    placeholderTextColor="#999"
                    value={operatingHours}
                    onChangeText={setOperatingHours}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Registration Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Registration Number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    value={registrationNumber}
                    onChangeText={setRegistrationNumber}
                  />
                </View>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => {
                    handleDonorRegister();
                    setShowDonorForm(false);
                  }}
                >
                  <Text style={styles.loginButtonText}>Submit</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>

        {/* Receiver Registration Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receiver Registration</Text>
          <View style={styles.card}>
            {!showReceiverForm ? (
              <TouchableOpacity style={styles.loginButton} onPress={() => setShowReceiverForm(true)}>
                <Text style={styles.loginButtonText}>Register as Receiver</Text>
              </TouchableOpacity>
            ) : (
              <>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>NGO Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your NGO/Organization Name"
                    placeholderTextColor="#999"
                    value={receiverName}
                    onChangeText={setReceiverName}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    value={receiverEmail}
                    onChangeText={setReceiverEmail}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Phone Number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    value={receiverPhoneNumber}
                    onChangeText={setReceiverPhone}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Location</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Location"
                    placeholderTextColor="#999"
                    value={receiverLocation}
                    onChangeText={setReceiverLocation}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>NGO Type</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your NGO/Organization Type"
                    placeholderTextColor="#999"
                    value={organizationType}
                    onChangeText={setOrganizationType}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Operating Hours</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Operating Hours"
                    placeholderTextColor="#999"
                    value={operatingHours}
                    onChangeText={setOperatingHours}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Registration Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Your Registration Number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    value={registrationNumber}
                    onChangeText={setRegistrationNumber}
                  />
                </View>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => {
                    handleReceiverRegister();
                    setShowReceiverForm(false);
                  }}
                >
                  <Text style={styles.loginButtonText}>Submit</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ViewMoreDonors Component
function ViewMoreDonors({ donorDetailsList, onGoBack, onViewDetails }: { donorDetailsList: any[]; onGoBack: () => void; onViewDetails: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>View More Donors</Text>
        </View>

        {/* Donor Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Donor Details</Text>
          {donorDetailsList.map((donor, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>Shop Name: {donor.shopName}</Text>
              <Text style={styles.cardText}>Registration Number: {donor.registrationNumber}</Text>
              <Text style={styles.cardText}>Location: {donor.location}</Text>
              <Text style={styles.cardText}>Opening Hours: {donor.openingHours}</Text>
              <TouchableOpacity style={styles.addButton} onPress={onViewDetails}>
                <FontAwesome name="plus" size={24} color="#006E29" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ViewMoreReceivers Component
function ViewMoreReceivers({ receiverDetailsList, onGoBack }: { receiverDetailsList: any[]; onGoBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>View More Receivers</Text>
        </View>

        {/* Receiver Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receiver Details</Text>
          {receiverDetailsList.map((receiver, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>NGO Name: {receiver.ngoName}</Text>
              <Text style={styles.cardText}>Location: {receiver.location}</Text>
              <Text style={styles.cardText}>Registration Number: {receiver.registrationNumber}</Text>
              <Text style={styles.cardText}>Operating Hours: {receiver.operatingHours}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Settings Component
function Settings({ onGoBack }: { onGoBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.settingsTitle}>Settings</Text>
        </View>

        {/* Settings Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Notifications</Text>
            <Text style={styles.cardText}>Theme</Text>
            <Text style={styles.cardText}>Language</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Change Password</Text>
            <Text style={styles.cardText}>Privacy Settings</Text>
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Activity Component
function Activity({ onGoBack }: { onGoBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Activity</Text>
        </View>

        {/* Activity Logs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Donation made to NGO XYZ</Text>
            <Text style={styles.cardText}>Donation received from ABC</Text>
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Account Component
function Account({ onGoBack }: { onGoBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Account</Text>
        </View>

        {/* Account Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Name: John Doe</Text>
            <Text style={styles.cardText}>Email: john.doe@example.com</Text>
            <Text style={styles.cardText}>Phone: +1234567890</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Change Password</Text>
            <Text style={styles.cardText}>Two-Factor Authentication</Text>
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// FoodDonationScreen Component
function FoodDonationScreen({ onGoBack }: { onGoBack: () => void }) {
  const [quantity, setQuantity] = useState(1);
  const [isVegetarian, setIsVegetarian] = useState(true);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.subtitle}>Pickup Where?</Text>
          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.subtitle}>Food Item(s)</Text>
          <TextInput
            style={styles.input}
            placeholder="Rice, Daal & Pasta"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.halfWidth}>
            <Text style={styles.subtitle}>Type of Food</Text>
            <View style={styles.dropdown}>
              <Text>Cooked Meals</Text>
              <FontAwesome name="chevron-down" size={16} color="#198754" />
            </View>
          </View>

          <View style={styles.halfWidth}>
            <Text style={styles.subtitle}>Quantity</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity 
                style={styles.quantityButton} 
                onPress={decreaseQuantity}
              >
                <FontAwesome name="minus" size={16} color="#198754" />
              </TouchableOpacity>
              
              <View style={styles.quantityDisplay}>
                <Text>{quantity}</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={increaseQuantity}
              >
                <FontAwesome name="plus" size={16} color="#198754" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.subtitle}>Food Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter the food details (eg. Fish Curry, Milk Packets - 1L)"
            placeholderTextColor="#999"
            multiline={true}
            numberOfLines={3}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.subtitle}>Dietary Information</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity 
              style={styles.radioOption}
              onPress={() => setIsVegetarian(true)}
            >
              <View style={[styles.radioButton, isVegetarian && styles.radioButtonSelected]}>
                {isVegetarian && <FontAwesome name="check" size={12} color="#fff" />}
              </View>
              <Text>Vegetarian</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.radioOption}
              onPress={() => setIsVegetarian(false)}
            >
              <View style={[styles.radioButton, !isVegetarian && styles.radioButtonSelected]}>
                {!isVegetarian && <FontAwesome name="check" size={12} color="#fff" />}
              </View>
              <Text>Non-Vegetarian</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.subtitle}>Expiry Date (If applicable)</Text>
          <TouchableOpacity style={styles.datePickerButton}>
            <FontAwesome name="calendar" size={16} color="#999" />
            <Text style={styles.datePickerText}>Choose Date</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.subtitle}>Preferred Pickup Schedule</Text>
          <View style={styles.dateTimeContainer}>
            <TouchableOpacity style={styles.datePickerButtonHalf}>
              <FontAwesome name="calendar" size={16} color="#999" />
              <Text style={styles.datePickerText}>Choose Date</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.timePickerButton}>
              <FontAwesome name="clock-o" size={16} color="#999" />
              <Text style={styles.datePickerText}>Time</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.subtitle}>Photos</Text>
          <TouchableOpacity style={styles.photoUpload}>
            <FontAwesome name="plus" size={24} color="#198754" />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            <FontAwesome name="check-circle" size={24} color="#198754" />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I assure that food quality and hygiene has maintained
          </Text>
        </View>
      </ScrollView>

      {/* Donate Button */}
      <TouchableOpacity style={styles.donateButton} onPress={onGoBack}>
        <Text style={styles.donateButtonText}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
}

// Main App Component
export default function KyndKartApp() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userEmail, setUserEmail] = useState('');
  const [donorDetailsList, setDonorDetailsList] = useState<any[]>([]);
  const [receiverDetailsList, setReceiverDetailsList] = useState<any[]>([]); // Added receiver details list

  const handleDonorRegister = (details: any) => {
    setDonorDetailsList([...donorDetailsList, details]);
    setCurrentScreen('home');
  };

  const handleReceiverRegister = (details: any) => {
    setReceiverDetailsList([...receiverDetailsList, details]);
    setCurrentScreen('home');
  };

  const handleViewMoreDonors = () => {
    setCurrentScreen('viewMoreDonors');
  };

  const handleViewMoreReceivers = () => {
    setCurrentScreen('viewMoreReceivers');
  };

  const handleViewDetails = () => {
    setCurrentScreen('foodDonation');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={() => setCurrentScreen('login')} />;
      case 'login':
        return (
          <LoginScreen
            onLogin={(email) => {
              setUserEmail(email);
              setCurrentScreen('home');
            }}
            onGoToRegister={() => setCurrentScreen('register')}
            onForgotPassword={() => setCurrentScreen('forgotPassword')}
          />
        );
      case 'register':
        return (
          <RegisterScreen
            onRegister={() => setCurrentScreen('home')}
            onGoToLogin={() => setCurrentScreen('login')}
          />
        );
      case 'otp':
        return (
          <OtpVerificationScreen
            email={userEmail}
            onVerify={() => setCurrentScreen('resetPassword')}
            onResend={() => console.log('Resend OTP')}
            onGoBack={() => setCurrentScreen('login')}
          />
        );
      case 'forgotPassword':
        return (
          <ForgotPasswordScreen
            onSendOtp={(emailOrPhone) => {
              setUserEmail(emailOrPhone);
              setCurrentScreen('otp');
            }}
            onGoBack={() => setCurrentScreen('login')}
          />
        );
      case 'resetPassword':
        return (
          <ResetPasswordScreen
            onResetPassword={(newPassword, confirmPassword) => {
              console.log('Password reset successfully');
              setCurrentScreen('login');
            }}
            onGoBack={() => setCurrentScreen('login')}
          />
        );
      case 'home':
        return (
          <HomeScreen
            onLogout={() => setCurrentScreen('login')}
            onSettingsPress={() => setCurrentScreen('settings')}
            onActivityPress={() => setCurrentScreen('activity')}
            onAccountPress={() => setCurrentScreen('account')}
            onRegisterPress={() => setCurrentScreen('registerPage')}
            donorDetailsList={donorDetailsList}
            receiverDetailsList={receiverDetailsList}
            onViewMoreDonorsPress={handleViewMoreDonors}
            onViewMoreReceiversPress={handleViewMoreReceivers}
          />
        );
      case 'settings':
        return <Settings onGoBack={() => setCurrentScreen('home')} />;
      case 'activity':
        return <Activity onGoBack={() => setCurrentScreen('home')} />;
      case 'account':
        return <Account onGoBack={() => setCurrentScreen('home')} />;
      case 'registerPage':
        return (
          <Register
            onGoBack={() => setCurrentScreen('home')}
            onDonorRegister={handleDonorRegister}
            onReceiverRegister={handleReceiverRegister}
          />
        );
      case 'viewMoreDonors':
        return <ViewMoreDonors donorDetailsList={donorDetailsList} onGoBack={() => setCurrentScreen('home')} onViewDetails={handleViewDetails} />;
      case 'viewMoreReceivers':
        return <ViewMoreReceivers receiverDetailsList={receiverDetailsList} onGoBack={() => setCurrentScreen('home')} />;
      case 'foodDonation':
        return <FoodDonationScreen onGoBack={() => setCurrentScreen('home')} />;
      default:
        return <WelcomeScreen onNext={() => setCurrentScreen('login')} />;
    }
  };

  return <SafeAreaView style={styles.container}>{renderScreen()}</SafeAreaView>;
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5F0',
  },
  scrollView: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loginLogoContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006E29',
    marginTop: -50,
  },
  contentSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    lineHeight: 34,
  },
  bottomSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#006E29',
    borderRadius: 25,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  logoContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    marginTop: 80,
  },
  logoBackground: {
    width: 90,
    height: 100,
    borderRadius: 30,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: 'white',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#006E29',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#006E29',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  dividerText: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    fontSize: 14,
    color: '#006E29',
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#363',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  viewMoreButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  viewMoreButtonText: {
    fontSize: 14,
    color: '#006E29',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: '#006E29',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#006E29',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpInstructions: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  resendOtp: {
    alignSelf: 'center',
    marginTop: 10,
  },
  resendOtpText: {
    fontSize: 14,
    color: '#006E29',
    fontWeight: 'bold',
  },
  addButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  spacer: {
    width: 40,
  },
  formContainer: {
    flex: 1,
    padding: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  halfWidth: {
    width: '48%',
  },
  dropdown: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#198754',
  },
  quantityDisplay: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    fontSize: 16,
    height: 80,
    textAlignVertical: 'top',
  },
  radioGroup: {
    flexDirection: 'row',
    marginTop: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#198754',
    borderColor: '#198754',
  },
  datePickerButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerButtonHalf: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  timePickerButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  datePickerText: {
    marginLeft: 8,
    color: '#999',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  photoUpload: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#198754',
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxText: {
    flex: 1,
  },
  donateButton: {
    backgroundColor: '#006E29',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  donateButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});