package com.project.democrud.UserRepo;

import com.project.democrud.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;


@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User , Integer> {
    @Query("SELECT u FROM User u WHERE u.immatriculation = ?1")
    User findUserByImm(String login);
    @Query("SELECT u FROM User u WHERE u.role = 2")
    List<User> findUserByRoleAd();
    @Query("SELECT u FROM User u WHERE u.role = 1")
    List<User> findUserByRoleAg();
    @Query("SELECT u FROM User u WHERE u.id_user= ?1")
    User findAllByIdd(int l);

}