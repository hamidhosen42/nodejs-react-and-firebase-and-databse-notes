const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: format(date, "PP"),
      slot,
      patientEmail: user.email, //patient
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        // to close the modal
        refetch();
        setTreatment(null);
      });
  };



//---------server site---------------
    app.post("/booking", async (req, res) => {
      const booking = req.body;
      // date by find beacuse this date 1 slot booking
      const query = {
        treatmentName: booking.treatmentName,
        date: booking.date, //this date 1 booking
        patientEmail: booking.patientEmail,
      };
      const exists = await bookingCollection.findOne(query);
      if (exists) {
        return res.send({ success: false, booking: exists });
      }
      const result = await bookingCollection.insertOne(booking);
      return res.send({ success: true, result });
    });
