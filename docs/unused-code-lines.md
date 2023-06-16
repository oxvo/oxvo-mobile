authStore.subscribe((state) => console.log('App JS, Subscribe: ', state));

        // <View style={styles.container}>
      {/* <Button onPress={onLogout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button> */}
      {/* <View style={[styles.contentWrapper]}> */}
        // <Text text50BO marginB-12 style={styles.title}>
        //   Today's Sessions
        // </Text>







     // </View>
      {/*
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} /> */}

      {/* <BottomSheet
        backgroundStyle={{ backgroundColor: 'pink' }}
        handleComponent={renderCustomHandle}
        ref={sheetRef}
        index={homeData.sessions?.length || 0 < 5 ? 0 : 0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <BottomSheetFlatList
          refreshing={isFetching}
          onRefresh={async () => {
            await refetch();
          }}
          data={data}
          keyExtractor={(i) => i}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet> */}
      {/* <Button onPress={onLogout}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </Button> */}
      {/* <Text h1>{t('screens.privateScreens.home.lastCounts')}</Text>
      <Text text>Today's Sessions</Text>
      <Text>
        Currents User Role:
        {currentUserRole}
      </Text>

      <Button onPress={purgeCompanySettingsInStorage}>
        <Text style={{ color: 'white' }}>Logout and clear all data</Text>
      </Button>
      <Text>
        Company Settings:
        {JSON.stringify(companySettings)}
      </Text>
      <Text>
        Me Data:
        {JSON.stringify(meData)}
      </Text>
      <Text>
        Home Data: Sessions Length: {homeData?.sessions?.length}, Packages Length:{' '}
        {homeData?.packages?.length || 0}
      </Text>
      <Button onPress={navigateSessionsHomeScreen}>
        <Text style={{ color: 'white' }}>Go to Sessions Home Screen</Text>
      </Button> */}
    // </View>
            {/* {homeData.sessions?.map((session, index) => {
              const getCurrentStatus = () => {
                if (currentUserRole === UserRoles.CLIENT) {
                  const reply = session.clientReply.toLowerCase();
                  if (reply.endsWith('_not_attend')) return 'not-attend';
                  return session.clientReply.toLowerCase();
                }
                const reply = session.staffReply.toLowerCase();
                if (reply.endsWith('_not_attend')) return 'not-attend';
                return session.staffReply.toLowerCase();
              };
              const getCounterPartStatus = () => {
                if (currentUserRole === UserRoles.CLIENT) {
                  const reply = session.clientReply.toLowerCase();
                  if (reply.endsWith('_not_attend')) return 'not-attend';
                  return session.staffReply.toLowerCase();
                }
                const reply = session.clientReply.toLowerCase();
                if (reply.endsWith('_not_attend')) return 'not-attend';
                return session.clientReply.toLowerCase();
              };

              // console.log('1!!!!!!!!!!!!!!!!!!!!!!!!!!!!', currentUserRole, UserRoles.CLIENT);
              return (
                <SessionCard
                  counterPartUserRoleName={
                    currentUserRole === UserRoles.CLIENT ? UserRoles.STAFF : UserRoles.CLIENT
                  }
                  key={session.id}
                  currentUserStatus={getCurrentStatus()}
                  counterPartStatus={getCounterPartStatus()}
                  fullName={`${
                    session[currentUserRole === UserRoles.CLIENT ? 'staff' : 'client'].firstName
                  } ${session[currentUserRole === UserRoles.CLIENT ? 'staff' : 'client'].lastName}`}
                  serviceName={session.companyService.name}
                />
              );
            })} */}
