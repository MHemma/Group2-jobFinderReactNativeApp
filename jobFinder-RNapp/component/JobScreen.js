import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
//import DateTimePicker from '@react-native-community/datetimepicker';

function JobsScreen() {
  // Sample job data
  const jobsData = [
    {
      id: '1',
      companyName: 'Tech Co',
      companyLogo: require('../assets/logo1.png'), // Replace with actual image path
      location: 'City A',
      position: 'Software Engineer',
      salary: '$80,000 - $100,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '2',
      companyName: 'Data Corp',
      companyLogo: require('../assets/logo2.png'), // Replace with actual image path
      location: 'City B',
      position: 'Data Scientist',
      salary: '$90,000 - $110,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '3',
      companyName: 'Design Studio',
      companyLogo: require('../assets/logo3.png'),
      location: 'City C',
      position: 'UI/UX Designer',
      salary: '$70,000 - $90,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '4',
      companyName: 'Health Innovations',
      companyLogo: require('../assets/logo4.png'),
      location: 'City D',
      position: 'Medical Researcher',
      salary: '$100,000 - $120,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '5',
      companyName: 'E-commerce Solutions',
      companyLogo: require('../assets/logo5.png'),
      location: 'City E',
      position: 'E-commerce Manager',
      salary: '$85,000 - $110,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },

    {
      id: '6',
      companyName: 'Digital Marketing Agency',
      companyLogo: require('../assets/logo6.png'),
      location: 'City F',
      position: 'Digital Marketing Specialist',
      salary: '$75,000 - $95,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '7',
      companyName: 'Green Energy Solutions',
      companyLogo: require('../assets/logo7.png'),
      location: 'City G',
      position: 'Environmental Engineer',
      salary: '$90,000 - $110,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '8',
      companyName: 'Finance Experts Ltd.',
      companyLogo: require('../assets/logo8.png'),
      location: 'City H',
      position: 'Financial Analyst',
      salary: '$80,000 - $100,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '9',
      companyName: 'Mobile App Innovators',
      companyLogo: require('../assets/logo9.png'),
      location: 'City I',
      position: 'Mobile App Developer',
      salary: '$85,000 - $105,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: '10',
      companyName: 'Fashion Trends Inc.',
      companyLogo: require('../assets/logo10.png'),
      location: 'City J',
      position: 'Fashion Designer',
      salary: '$70,000 - $90,000 per year',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    // Add more jobs as needed
  ];

  // Add a new state to track which job's appointment is set
  const [appointmentSet, setAppointmentSet] = useState({});

  // Function to handle setting an appointment
  const handleSetAppointment = (id) => {
    setAppointmentSet((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  // Render individual job item
  const renderItem = ({ item }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* <Image
          source={item.companyLogo}
          style={{ width: 40, height: 40, marginRight: 10 }}
        /> */}
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {item.position}
        </Text>
      </View>
      <Text style={{ fontSize: 16 }}>
        {item.companyName} - {item.location}
      </Text>
      <Text style={{ fontSize: 14, color: 'green' }}>{item.salary}</Text>
      <Text style={{ marginTop: 5 }}>{item.jobDescription}</Text>

      {/* "Set Appointment" button */}
      <TouchableOpacity
        style={[
          styles.appointmentButton,
          appointmentSet[item.id] ? styles.buttonClicked : null,
        ]}
        onPress={() => handleSetAppointment(item.id)}
        disabled={appointmentSet[item.id]}
      >
        <Text style={styles.buttonText}>
          {appointmentSet[item.id] ? 'Appointment Set' : 'Set Appointment'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
      {/* FlatList to display the list of jobs */}
      <FlatList
        data={jobsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  appointmentButton: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  buttonClicked: {
    backgroundColor: 'gray',
  },
  // ... (add other styles as needed)
});

export default JobsScreen;
