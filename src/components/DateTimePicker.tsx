import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntIcon from 'react-native-vector-icons/AntDesign';


const DateTimePicker = ({dateTime}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    dateTime(date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.dateButtonStyle}
        activeOpacity={0.5}
        onPress={showDatePicker}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.buttonTextStyle}>
            <AntIcon name="calendar" size={24} />
          </Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 7,
    paddingHorizontal: 7,
    fontSize: 16,
  },

  dateButtonStyle: {
    backgroundColor: '#126fb2',
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    margin: 10,
  },
});

export default DateTimePicker;